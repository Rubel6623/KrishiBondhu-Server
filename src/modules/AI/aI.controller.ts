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
    message: 'AI query history retrieved successfully',
    data: result,
  });
});

const getAIAnalytics = catchAsync(async (req: Request, res: Response) => {
  const result = await AIService.getAIAnalytics();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AI analytics retrieved successfully',
    data: result,
  });
});

const getSearchSuggestions = catchAsync(async (req: Request, res: Response) => {
  const { q } = req.query;
  const result = await AIService.getSearchSuggestions(q as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Suggestions retrieved successfully',
    data: result,
  });
});

const getSmartRecommendations = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await AIService.getSmartRecommendations(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Smart recommendations generated successfully',
    data: result,
  });
});

export const AIController = {
  createAIQuery,
  getMyAIQueries,
  getAIAnalytics,
  getSmartRecommendations,
  getSearchSuggestions,
};