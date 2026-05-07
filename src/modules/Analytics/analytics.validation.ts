import { z } from 'zod';

const getStatsQuerySchema = z.object({
  query: z.object({
    startDate: z.string().optional(),
    endDate: z.string().optional(),
  }),
});

export const AnalyticsValidation = {
  getStatsQuerySchema,
};
