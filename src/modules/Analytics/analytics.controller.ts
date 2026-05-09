import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AnalyticsService } from './analytics.service';

const getAdminStats = catchAsync(async (req: Request, res: Response) => {
  const result = await AnalyticsService.getAdminStats();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin stats retrieved successfully',
    data: result,
  });
});

const getProviderStats = catchAsync(async (req: Request, res: Response) => {
  const providerId = (req as any).user.id;
  const result = await AnalyticsService.getProviderStats(providerId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Provider stats retrieved successfully',
    data: result,
  });
});

const getFarmerStats = catchAsync(async (req: Request, res: Response) => {
  const farmerId = (req as any).user.id;
  const result = await AnalyticsService.getFarmerStats(farmerId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Farmer stats retrieved successfully',
    data: result,
  });
});

export const AnalyticsController = {
  getAdminStats,
  getProviderStats,
  getFarmerStats,
};