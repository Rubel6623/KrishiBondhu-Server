import { z } from 'zod';

const createNotificationSchema = z.object({
  body: z.object({
    userId: z.string({
      message: 'User ID is required',
    }).cuid(),
    title: z.string({
      message: 'Title is required',
    }),
    message: z.string({
      message: 'Message is required',
    }),
  }),
});

export const NotificationsValidation = {
  createNotificationSchema,
};
