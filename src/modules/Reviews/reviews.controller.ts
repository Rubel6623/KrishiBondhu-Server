import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewsService } from './reviews.service';

const createReview = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await ReviewsService.createReview(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Review created successfully',
    data: result,
  });
});

const getEquipmentReviews = catchAsync(async (req: Request, res: Response) => {
  const { equipmentId } = req.params;
  const result = await ReviewsService.getEquipmentReviews(equipmentId as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Reviews retrieved successfully',
    data: result,
  });
});

const deleteReview = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { id } = req.params;
  const result = await ReviewsService.deleteReview(id as string, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review deleted successfully',
    data: result,
  });
});

export const ReviewsController = {
  createReview,
  getEquipmentReviews,
  deleteReview,
};