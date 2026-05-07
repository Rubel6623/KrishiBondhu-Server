import { AIFeatureType } from '../../generated/prisma/client';

export interface IAIQuery {
  id: string;
  userId: string;
  prompt: string;
  response: string;
  featureType: AIFeatureType;
  createdAt: Date;
}

export interface ICreateAIQueryInput {
  prompt: string;
  featureType: AIFeatureType;
}