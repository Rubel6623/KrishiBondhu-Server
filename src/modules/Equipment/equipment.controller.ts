import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { EquipmentService } from './equipment.service';

const createEquipment = catchAsync(async (req: Request, res: Response) => {
  const providerId = (req as any).user.id;
  const result = await EquipmentService.createEquipment(providerId, req.body);
  
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Equipment listed successfully",
    data: result
  });
});

const getAllEquipment = catchAsync(async (req: Request, res: Response) => {
  const filters = req.query;
  const result = await EquipmentService.getAllEquipment(filters);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Equipment retrieved successfully",
    data: result
  });
});

const getSingleEquipment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EquipmentService.getSingleEquipment(id as string);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Equipment retrieved successfully",
    data: result
  });
});

const updateEquipment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EquipmentService.updateEquipment(id as string, req.body);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Equipment updated successfully",
    data: result
  });
});

const deleteEquipment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await EquipmentService.deleteEquipment(id as string);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Equipment deleted successfully",
    data: result
  });
});

export const EquipmentController = {
  createEquipment,
  getAllEquipment,
  getSingleEquipment,
  updateEquipment,
  deleteEquipment
};