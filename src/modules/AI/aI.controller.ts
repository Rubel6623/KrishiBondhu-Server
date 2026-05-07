import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AIService } from './aI.service';

const createAIQuery = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await AIService.createAIQuery(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'AI query processed successfully',
    data: result,
  });
});

const getMyAIQueries = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await AIService.getMyAIQueries(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AI queries retrieved successfully',
    data: result,
  });
});

export const AIController = {
  createAIQuery,
  getMyAIQueries,
};