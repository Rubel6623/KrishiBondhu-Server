import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProvidersService } from './providers.service';

const getAllProviders = catchAsync(async (req: Request, res: Response) => {
  const filters = req.query;
  const result = await ProvidersService.getAllProviders(filters);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Providers retrieved successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getProviderById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProvidersService.getProviderById(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Provider retrieved successfully',
    data: result,
  });
});

export const ProvidersController = {
  getAllProviders,
  getProviderById,
};