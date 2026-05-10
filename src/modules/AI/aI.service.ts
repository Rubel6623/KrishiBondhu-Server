import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '../../lib/prisma';
import { ICreateAIQueryInput } from './aI.interface';
import { enqueue } from '../../utils/queue';
import logger from '../../utils/logger';
import { NotificationsService } from '../Notifications/notifications.service';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const createAIQuery = async (userId: string, payload: ICreateAIQueryInput) => {
  let promptPrefix = "";
  if (payload.featureType === 'CROP_ASSISTANT') {
    promptPrefix = "You are an expert agricultural assistant. Provide a concise, practical answer for a farmer: ";
  } else if (payload.featureType === 'RECOMMENDATION') {
    promptPrefix = "Suggest the best agricultural equipment or practices for this situation: ";
  } else if (payload.featureType === 'CONTENT_GENERATOR') {
    promptPrefix = "Generate a professional blog post outline or content for an agricultural platform: ";
  } else if (payload.featureType === 'DATA_ANALYZER') {
    promptPrefix = "Analyze the following agricultural data and provide strategic insights, trends, and recommendations: ";
  }

  // Create a placeholder record immediately so client gets a response fast
  const pending = await prisma.aIQuery.create({
    data: { ...payload, userId, response: '...' },
  });

  // Offload heavy Gemini inference to the job queue
  enqueue({
    name: `ai-query:${pending.id}`,
    fn: async () => {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(promptPrefix + payload.prompt);
      const aiResponse = result.response.text();
      return await prisma.aIQuery.update({
        where: { id: pending.id },
        data: { response: aiResponse },
      });
    },
    onSuccess: (updated) => {
      logger.info(`[Queue] AI response written for query ${updated.id}`);
      // Notify the user that their AI response is ready
      NotificationsService.createNotification({
        userId,
        title: 'AI Analysis Complete',
        message: `Your ${updated.featureType.replace('_', ' ').toLowerCase()} result is now ready to view.`,
        type: 'AI',
        aiQueryId: updated.id,
      }).catch(err => logger.error(`[AI Notification] Failed: ${err.message}`));
    },
    onError: (err) => {
      logger.error(`[Queue] AI response failed for query ${pending.id}: ${err.message}`);
    },
  });

  return pending;
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

const getAIAnalytics = async () => {
  const totalQueries = await prisma.aIQuery.count();
  
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const queriesThisWeek = await prisma.aIQuery.count({
    where: {
      createdAt: {
        gte: oneWeekAgo,
      },
    },
  });

  const featureUsageRaw = await prisma.aIQuery.groupBy({
    by: ['featureType'],
    _count: {
      featureType: true,
    },
  });

  const featureUsage = featureUsageRaw.map((item) => ({
    name: item.featureType.replace('_', ' '),
    count: item._count.featureType,
  }));

  const recentLogs = await prisma.aIQuery.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: {
        select: {
          name: true,
          role: true,
        },
      },
    },
  });

  return {
    totalQueries,
    queriesThisWeek,
    featureUsage,
    recentLogs,
  };
};

const getSmartRecommendations = async (userId: string) => {
  // 1. Gather user context from DB
  const [bookings, aiHistory, reviews, userProfile] = await Promise.all([
    prisma.booking.findMany({
      where: { farmerId: userId },
      take: 10,
      orderBy: { createdAt: 'desc' },
      include: {
        equipment: {
          select: { title: true, category: { select: { name: true } }, location: true, pricePerDay: true },
        },
      },
    }),
    prisma.aIQuery.findMany({
      where: { userId },
      take: 10,
      orderBy: { createdAt: 'desc' },
      select: { prompt: true, featureType: true },
    }),
    prisma.review.findMany({
      where: { userId },
      take: 5,
      include: { equipment: { select: { title: true } } },
    }),
    prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, location: true },
    }),
  ]);

  // 2. Build rich context string
  const bookedEquipment = bookings.map(b =>
    `${b.equipment.title} (${b.equipment.category?.name ?? 'General'}, ৳${b.equipment.pricePerDay}/day, ${b.equipment.location})`
  ).join(', ') || 'No bookings yet';

  const pastPrompts = aiHistory.map(q => `[${q.featureType}] ${q.prompt}`).join(' | ') || 'No AI queries yet';

  const reviewedItems = reviews.map(r => `${r.equipment.title} — rated ${r.rating}/5`).join(', ') || 'No reviews yet';

  const contextPrompt = `
You are an intelligent agricultural recommendation engine for KrishiBondhu, a Bangladeshi farming platform.

User profile:
- Name: ${userProfile?.name ?? 'Farmer'}
- Location: ${userProfile?.location ?? 'Bangladesh'}
- Recent equipment bookings: ${bookedEquipment}
- Past AI assistant queries: ${pastPrompts}
- Equipment reviews given: ${reviewedItems}

Based on this history, generate EXACTLY 6 personalised recommendations. Return ONLY a valid JSON array (no markdown, no prose) with this schema:
[
  {
    "type": "equipment" | "practice" | "blog" | "specialist",
    "title": "Short headline",
    "reason": "One concise sentence explaining why this suits the user",
    "priority": "high" | "medium" | "low",
    "icon": "tractor" | "sprout" | "book" | "stethoscope" | "droplets" | "sun" | "bug" | "scale"
  }
]
Focus on crops common in ${userProfile?.location ?? 'Bangladesh'}, equipment relevant to their booking patterns, and seasonal farming tips.
`;

  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent(contextPrompt);
  const raw = result.response.text().trim();

  // Strip potential markdown code fences
  const json = raw.replace(/^```[a-z]*\n?/, '').replace(/```$/, '').trim();

  let recommendations: any[] = [];
  try {
    recommendations = JSON.parse(json);
  } catch {
    recommendations = [];
  }

  // Save this as a RECOMMENDATION query for analytics tracking
  await prisma.aIQuery.create({
    data: {
      userId,
      prompt: 'Smart Recommendations (auto-generated)',
      response: json,
      featureType: 'RECOMMENDATION',
    },
  });

  return recommendations;
};

const getSearchSuggestions = async (query: string) => {
  if (!query || query.length < 2) return [];

  try {
    // Fetch current platform context (categories and top equipment)
    const [categories, equipment] = await Promise.all([
      prisma.category.findMany({ select: { name: true } }),
      prisma.equipment.findMany({ take: 10, select: { title: true } }),
    ]);

    const context = `
      Categories: ${categories.map(c => c.name).join(', ')}
      Equipment: ${equipment.map(e => e.title).join(', ')}
    `;

    const prompt = `
      You are the search engine for KrishiBondhu, a Bangladeshi AgriTech platform.
      The user is typing: "${query}"
      Based on the project's content:
      ${context}
      Provide EXACTLY 5 relevant search suggestions (equipment, categories, or agricultural needs).
      Return ONLY a JSON array of strings. No markdown.
    `;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const raw = result.response.text().trim();
    const json = raw.replace(/^```[a-z]*\n?/, '').replace(/```$/, '').trim();

    try {
      return JSON.parse(json);
    } catch {
      // Fallback if parsing fails
      return [query + " equipment", query + " services", "Rent " + query];
    }
  } catch (error: any) {
    logger.error(`[AI Service] getSearchSuggestions failed: ${error.message}`);
    // Fallback if AI fails (e.g. invalid API key)
    const lowerQuery = query.toLowerCase();
    const fallbackSuggestions = [
      "Tractor", "Power Tiller", "Combine Harvester", "Irrigation Pump", 
      "Fertilizer", "Pesticides", "Rice Harvester", "Seeder"
    ];
    const matches = fallbackSuggestions.filter(s => s.toLowerCase().includes(lowerQuery)).slice(0, 5);
    return matches.length > 0 ? matches : [query];
  }
};

export const AIService = {
  createAIQuery,
  getMyAIQueries,
  getAIAnalytics,
  getSmartRecommendations,
  getSearchSuggestions,
};