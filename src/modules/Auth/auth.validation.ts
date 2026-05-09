import { z } from 'zod';

const registerValidationSchema = z.object({
  body: z.object({
    name: z.string({ message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    role: z.string().transform((val) => val.toUpperCase()).pipe(z.enum(['FARMER', 'PROVIDER', 'VETERINARIAN', 'ADMIN'])).optional(),
    phone: z.string().optional(),
    location: z.string().optional(),
    avatar: z.string().url().optional(),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    emailOrPhone: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    password: z.string({ message: 'Password is required' }),
  }).refine((data) => data.emailOrPhone || data.email || data.phone, {
    message: "At least one of emailOrPhone, email, or phone is required",
  }),
});

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
};


