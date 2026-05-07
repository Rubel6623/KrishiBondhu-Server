import { z } from 'zod';

const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    phone: z.string().optional(),
    location: z.string().optional(),
    avatar: z.string().url().optional(),
  }),
});

export const UserValidation = {
  updateProfileSchema,
};
