import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import { AnalyticsController } from './analytics.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AnalyticsValidation } from './analytics.validation';

const router = express.Router();

router.get(
  '/admin',
  auth(UserRole.ADMIN),
  validateRequest(AnalyticsValidation.getStatsQuerySchema),
  AnalyticsController.getAdminStats
);

router.get(
  '/provider',
  auth(UserRole.PROVIDER),
  validateRequest(AnalyticsValidation.getStatsQuerySchema),
  AnalyticsController.getProviderStats
);

export const AnalyticsRoutes = router;
