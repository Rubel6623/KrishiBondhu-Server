import { z } from 'zod';
import { AIFeatureType } from '../../generated/prisma/client';

const createAIQuerySchema = z.object({
  body: z.object({
    prompt: z.string({
      message: "Prompt is required",
    }),
    featureType: z.nativeEnum(AIFeatureType, {
      message: "Feature type is required",
    }),
  }),
});

export const AIValidation = {
  createAIQuerySchema,
};
