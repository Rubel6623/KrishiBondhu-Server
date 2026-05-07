import express from 'express';
import auth, { UserRole } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewsController } from './reviews.controller';
import { ReviewsValidation } from './reviews.validation';

const router = express.Router();

router.get('/:equipmentId', ReviewsController.getEquipmentReviews);

router.post(
  '/',
  auth(UserRole.FARMER, UserRole.ADMIN),
  validateRequest(ReviewsValidation.createReviewSchema),
  ReviewsController.createReview
);

router.delete(
  '/:id',
  auth(UserRole.FARMER, UserRole.ADMIN),
  ReviewsController.deleteReview
);

export const ReviewsRoutes = router;
