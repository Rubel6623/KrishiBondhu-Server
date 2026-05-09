import express from 'express';
import { UserController } from './user.controller';
import { UserRole } from '../../middlewares/auth';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.get(
  '/',
  auth(UserRole.ADMIN),
  UserController.getAllUsers
);

router.get(
  '/profile',
  auth(UserRole.ADMIN, UserRole.FARMER, UserRole.PROVIDER, UserRole.VETERINARIAN),
  UserController.getMyProfile
);

router.patch(
  '/profile',
  auth(UserRole.ADMIN, UserRole.FARMER, UserRole.PROVIDER, UserRole.VETERINARIAN),
  validateRequest(UserValidation.updateProfileSchema),
  UserController.updateProfile
);

router.patch(
  '/:id/status',
  auth(UserRole.ADMIN),
  UserController.updateUserStatus
);

router.delete(
  '/:id',
  auth(UserRole.ADMIN),
  UserController.deleteUser
);

router.get(
  '/:id',
  auth(UserRole.ADMIN),
  UserController.getSingleUser
);

export const UserRoutes = router;
