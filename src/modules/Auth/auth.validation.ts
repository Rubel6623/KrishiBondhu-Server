import { z } from 'zod';

const registerValidationSchema = z.object({
  body: z.object({
    name: z.string({ message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    role: z.enum(['FARMER', 'PROVIDER', 'ADMIN']).optional(),
    phone: z.string().optional(),
    location: z.string().optional(),
    avatar: z.string().url().optional(),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string({ message: 'Password is required' }),
  }),
});

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
};


