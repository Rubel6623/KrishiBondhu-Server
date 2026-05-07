import express from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../middlewares/auth';
import { NotificationsController } from './notifications.controller';
import validateRequest from '../../middlewares/validateRequest';
import { NotificationsValidation } from './notifications.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.ADMIN),
  validateRequest(NotificationsValidation.createNotificationSchema),
  NotificationsController.createNotification
);

router.get(
  '/',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.ADMIN),
  NotificationsController.getMyNotifications
);

router.patch(
  '/mark-all-read',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.ADMIN),
  NotificationsController.markAllAsRead
);

router.patch(
  '/:id',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.ADMIN),
  NotificationsController.markAsRead
);

export const NotificationsRoutes = router;
