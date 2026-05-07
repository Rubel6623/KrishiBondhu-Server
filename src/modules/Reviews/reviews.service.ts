import { prisma } from '../../lib/prisma';
import { ICreateReviewInput } from './reviews.interface';

const createReview = async (userId: string, payload: ICreateReviewInput) => {
  const result = await prisma.$transaction(async (tx) => {
    // Create the review
    const review = await tx.review.create({
      data: {
        ...payload,
        userId,
      },
    });

    // Update equipment average rating
    const aggregations = await tx.review.aggregate({
      where: {
        equipmentId: payload.equipmentId,
      },
      _avg: {
        rating: true,
      },
    });

    await tx.equipment.update({
      where: {
        id: payload.equipmentId,
      },
      data: {
        rating: aggregations._avg.rating || 0,
      },
    });

    return review;
  });

  return result;
};

const getEquipmentReviews = async (equipmentId: string) => {
  return await prisma.review.findMany({
    where: {
      equipmentId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const deleteReview = async (reviewId: string, userId: string) => {
  // Check if review exists and belongs to user
  const review = await prisma.review.findUnique({
    where: { id: reviewId },
  });

  if (!review) {
    throw new Error('Review not found');
  }

  if (review.userId !== userId) {
    throw new Error('You are not authorized to delete this review');
  }

  return await prisma.$transaction(async (tx) => {
    await tx.review.delete({
      where: { id: reviewId },
    });

    // Update equipment average rating
    const aggregations = await tx.review.aggregate({
      where: {
        equipmentId: review.equipmentId,
      },
      _avg: {
        rating: true,
      },
    });

    await tx.equipment.update({
      where: {
        id: review.equipmentId,
      },
      data: {
        rating: aggregations._avg.rating || 0,
      },
    });

    return { message: 'Review deleted successfully' };
  });
};

export const ReviewsService = {
  createReview,
  getEquipmentReviews,
  deleteReview,
};