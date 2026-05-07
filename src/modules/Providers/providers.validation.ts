import { z } from 'zod';

const createProviderSchema = z.object({
  body: z.object({
    name: z.string({ message: 'Name is required' }),
    email: z.string({ message: 'Email is required' }).email('Invalid email'),
    phone: z
      .string()
      .optional()
      .refine((value) => !value || /^\+?[0-9]+$/.test(value), 'Invalid phone format'),
    location: z.string().optional(),
    bio: z.string().optional(),
    // avatar: z.string().optional(),
    // providerLicense: z.string().optional(),
    // equipmentTypes: z
    //   .array(
    //     z.object({
    //       name: z.string(),
    //       category: z.enum(['TRACTOR', 'HARVESTER', 'DRONE', 'PLANTER', 'IRRIGATOR', 'OTHER']),
    //       // Add other equipment-specific fields as needed
    //     })
    //   )
    //   .optional(),
  }),
});

export const ProvidersValidation = {
  createProviderSchema,
};

// export const providersValidationSchema = {
//     // Add validation schemas here
//     };
