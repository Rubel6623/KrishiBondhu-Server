import { prisma } from '../../lib/prisma';
import { ICreateAIQueryInput } from './aI.interface';

const createAIQuery = async (userId: string, payload: ICreateAIQueryInput) => {
  // Simulate AI response logic
  let aiResponse = "";
  
  if (payload.featureType === 'CROP_ASSISTANT') {
    aiResponse = `Based on your query "${payload.prompt}", here is some advice: Ensure proper soil moisture and monitor for common pests in your region. Consider using organic fertilizers for better long-term yield.`;
  } else if (payload.featureType === 'RECOMMENDATION') {
    aiResponse = `I recommend looking into modern irrigation techniques and potentially upgrading your current equipment to improve efficiency.`;
  } else if (payload.featureType === 'CONTENT_GENERATOR') {
    aiResponse = `Here is a draft for your blog post: "The Future of Sustainable Farming". Focus on soil health and biodiversity...`;
  } else {
    aiResponse = `Data analysis shows a positive trend in crop yields for farmers using similar equipment in your area.`;
  }

  return await prisma.aIQuery.create({
    data: {
      ...payload,
      userId,
      response: aiResponse,
    },
  });
};

const getMyAIQueries = async (userId: string) => {
  return await prisma.aIQuery.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const AIService = {
  createAIQuery,
  getMyAIQueries,
};