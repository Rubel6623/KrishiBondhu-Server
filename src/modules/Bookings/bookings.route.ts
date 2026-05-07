import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookingsController } from './bookings.controller';
import { createBookingSchema, updateBookingStatusSchema } from './bookings.validation';

const router = express.Router();

router.post(
  '/',
  auth(UserRole.FARMER),
  validateRequest(createBookingSchema),
  BookingsController.createBooking
);

router.get(
  '/my-bookings',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.ADMIN),
  BookingsController.getMyBookings
);

router.patch(
  '/:id/status',
  auth(UserRole.PROVIDER, UserRole.ADMIN),
  validateRequest(updateBookingStatusSchema),
  BookingsController.updateBookingStatus
);

export const BookingsRoutes = router;

