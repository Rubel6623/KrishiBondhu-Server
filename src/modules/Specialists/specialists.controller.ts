import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SpecialistService } from './specialists.service';
import httpStatus from 'http-status';

const getAllSpecialists = catchAsync(async (req: Request, res: Response) => {
  const result = await SpecialistService.getAllSpecialists();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Specialists retrieved successfully',
    data: result,
  });
});

const getSpecialistById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialistService.getSpecialistById(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Specialist retrieved successfully',
    data: result,
  });
});

const getMyProfile = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await SpecialistService.getSpecialistByUserId(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile retrieved successfully',
    data: result,
  });
});

const upsertMyProfile = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await SpecialistService.upsertSpecialistProfile(userId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: result,
  });
});

const deleteSpecialist = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SpecialistService.deleteSpecialist(id as string);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Specialist removed successfully',
    data: result,
  });
});

export const SpecialistController = {
  getAllSpecialists,
  getSpecialistById,
  getMyProfile,
  upsertMyProfile,
  deleteSpecialist,
};
