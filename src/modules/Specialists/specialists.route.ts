import express from 'express';
import { SpecialistController } from './specialists.controller';
import auth, { UserRole } from '../../middlewares/auth';

const router = express.Router();

router.get('/', SpecialistController.getAllSpecialists);

router.get(
  '/my-profile',
  auth(UserRole.VETERINARIAN),
  SpecialistController.getMyProfile
);

router.post(
  '/profile',
  auth(UserRole.VETERINARIAN),
  SpecialistController.upsertMyProfile
);

router.delete(
  '/:id',
  auth(UserRole.ADMIN),
  SpecialistController.deleteSpecialist
);

router.get('/:id', SpecialistController.getSpecialistById);

export const SpecialistRoutes = router;
