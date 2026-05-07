import { Request, Response } from 'express';
import { EquipmentService } from './equipment.service';

const createEquipment = async (req: Request, res: Response) => {
  try {
    const providerId = (req as any).user.id; // From Auth Middleware
    const result = await EquipmentService.createEquipment(providerId, req.body);
    
    res.status(201).json({
      success: true,
      message: "Equipment listed successfully",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllEquipment = async (req: Request, res: Response) => {
  try {
    const filters = req.query;
    const result = await EquipmentService.getAllEquipment(filters);
    
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const EquipmentController = {
  createEquipment,
  getAllEquipment
};