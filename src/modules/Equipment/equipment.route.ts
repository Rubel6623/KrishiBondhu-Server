import express from 'express';
import { EquipmentController } from './equipment.controller';
import validateRequest from '../../shared/middleware/validateRequest'; // Your validation helper
import { createEquipmentSchema } from './equipment.validation';

const router = express.Router();

router.get('/', EquipmentController.getAllEquipment);

router.post(
  '/create',
  validateRequest(createEquipmentSchema),
  EquipmentController.createEquipment
);

export const EquipmentRoutes = router;