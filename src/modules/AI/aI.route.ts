import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AIController } from './aI.controller';
import { AIValidation } from './aI.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.ADMIN),
  validateRequest(AIValidation.createAIQuerySchema),
  AIController.createAIQuery
);

router.get(
  '/history',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.ADMIN),
  AIController.getMyAIQueries
);

export const AIRoutes = router;
