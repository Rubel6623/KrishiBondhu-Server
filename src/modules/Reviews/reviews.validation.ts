import { z } from 'zod';

const createReviewSchema = z.object({
  body: z.object({
    rating: z.number().min(1).max(5),
    comment: z.string().optional(),
    equipmentId: z.string({
      message: "Equipment ID is required",
    }).cuid(),
  }),
});

export const ReviewsValidation = {
  createReviewSchema,
};
