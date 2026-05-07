import express from 'express';
import { EquipmentController } from './equipment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createEquipmentSchema, updateEquipmentSchema } from './equipment.validation';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.get('/', EquipmentController.getAllEquipment);

router.get('/:id', EquipmentController.getSingleEquipment);

router.post(
  '/create',
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  validateRequest(createEquipmentSchema),
  EquipmentController.createEquipment
);

router.patch(
  '/:id',
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  validateRequest(updateEquipmentSchema),
  EquipmentController.updateEquipment
);

router.delete(
  '/:id',
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  EquipmentController.deleteEquipment
);

export const EquipmentRoutes = router;