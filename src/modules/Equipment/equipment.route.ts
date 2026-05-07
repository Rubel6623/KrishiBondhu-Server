import express from 'express';
import { EquipmentController } from './equipment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createEquipmentSchema } from './equipment.validation';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.get('/', EquipmentController.getAllEquipment);

router.post(
  '/create',
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  validateRequest(createEquipmentSchema),
  EquipmentController.createEquipment
);

export const EquipmentRoutes = router;