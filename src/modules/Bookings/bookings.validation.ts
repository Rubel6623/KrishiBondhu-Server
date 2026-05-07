import { z } from 'zod';

export const createBookingSchema = z.object({
  body: z.object({
    equipmentId: z.string().cuid('Invalid Equipment ID'),
    startDate: z.string().datetime({ message: "Invalid start date" }),
    endDate: z.string().datetime({ message: "Invalid end date" }),
  }).refine((data) => new Date(data.startDate) < new Date(data.endDate), {
    message: "End date must be after start date",
    path: ['endDate'],
  })
});

export const updateBookingStatusSchema = z.object({
  body: z.object({
    status: z.enum(['ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED']),
  })
});
