import { prisma } from '../../lib/prisma';
import { ICreateReviewInput } from './reviews.interface';
import { emitToUser } from '../../utils/socket';
import { NotificationsService } from '../Notifications/notifications.service';

const createReview = async (userId: string, payload: ICreateReviewInput) => {
  const result = await prisma.$transaction(async (tx) => {
    // Get the equipment to find the providerId
    const equipment = await tx.equipment.findUnique({
      where: { id: payload.equipmentId },
      select: { providerId: true }
    });

    if (!equipment) throw new Error("Equipment not found");

    // Create the review
    const review = await tx.review.create({
      data: {
        ...payload,
        userId,
        providerId: equipment.providerId
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

  // Fetch review with user and equipment details for real-time notification
  const fullReview = await prisma.review.findUnique({
    where: { id: result.id },
    include: {
      user: { select: { name: true } },
      equipment: { select: { title: true } }
    }
  });

  if (fullReview && fullReview.providerId) {
    // Create system notification for provider
    await NotificationsService.createNotification({
      providerId: fullReview.providerId,
      title: "New Review Received",
      message: `${fullReview.user?.name} left a ${fullReview.rating}-star review for ${fullReview.equipment?.title ?? 'your equipment'}.`,
      type: "REVIEW"
    });

    // Emit real-time socket event
    emitToUser(fullReview.providerId, "new_review", fullReview);
  }

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
const getFarmerReviews = async (userId: string) => {
  return await prisma.review.findMany({
    where: {
      userId,
    },
    include: {
      equipment: {
        select: {
          id: true,
          title: true,
          images: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const getProviderReviews = async (providerId: string) => {
  return await prisma.review.findMany({
    where: {
      providerId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      equipment: {
        select: {
          id: true,
          title: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const getAllReviews = async () => {
  return await prisma.review.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      equipment: {
        select: {
          id: true,
          title: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const ReviewsService = {
  createReview,
  getEquipmentReviews,
  getAllReviews,
  deleteReview,
  getFarmerReviews,
  getProviderReviews,
};