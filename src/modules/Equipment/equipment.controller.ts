import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { EquipmentService } from './equipment.service';

const createEquipment = async (req: Request, res: Response) => {
  try {
    const providerId = (req as any).user.id; // From Auth Middleware
    const result = await EquipmentService.createEquipment(providerId, req.body);
    
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Equipment listed successfully",
      data: result
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
  }
};

const getAllEquipment = async (req: Request, res: Response) => {
  try {
    const filters = req.query;
    const result = await EquipmentService.getAllEquipment(filters);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Equipment retrieved successfully",
      data: result
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
  }
};

export const EquipmentController = {
  createEquipment,
  getAllEquipment
};