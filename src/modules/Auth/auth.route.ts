import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';

const router = express.Router();

router.post(
  '/register',
  validateRequest(AuthValidation.registerValidationSchema),
  AuthController.createUser
);

router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.loginUser
);


router.post('/social-login', AuthController.socialLogin);

router.get(
  '/me',
  auth(UserRole.ADMIN, UserRole.FARMER, UserRole.PROVIDER),
  AuthController.getMe
);

router.put(
  '/me',
  auth(UserRole.ADMIN, UserRole.FARMER, UserRole.PROVIDER),
  AuthController.updateMe
);

export const AuthRoutes = router;

