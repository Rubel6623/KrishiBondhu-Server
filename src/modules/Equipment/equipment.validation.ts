import { z } from 'zod';

export const createEquipmentSchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title must be at least 5 characters'),
    description: z.string().min(20, 'Description must be at least 20 characters'),
    pricePerDay: z.number().positive('Price per day must be positive'),
    location: z.string().min(2, 'Location is required'),
    categoryId: z.string().cuid('Invalid Category ID'),
    images: z.array(z.string().url()).optional()
  })
});

export const updateEquipmentSchema = z.object({
  body: z.object({
    title: z.string().min(5).optional(),
    description: z.string().min(20).optional(),
    pricePerDay: z.number().positive().optional(),
    location: z.string().optional(),
    categoryId: z.string().cuid().optional(),
    images: z.array(z.string().url()).optional()
  })
});
