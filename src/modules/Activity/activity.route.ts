import { Router, Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import { getQueueStats } from '../../utils/queue';
import logger from '../../utils/logger';

const router = Router();

// Keeps track of all open SSE connections
const clients: Map<string, Response> = new Map();

export const broadcastActivity = (event: string, data: any) => {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  clients.forEach((res, id) => {
    try {
      res.write(payload);
    } catch {
      clients.delete(id);
    }
  });
};

// SSE stream endpoint — clients subscribe here
router.get('/stream', async (req: Request, res: Response) => {
  const clientId = `${Date.now()}-${Math.random()}`;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.flushHeaders();

  // Send initial connection confirmation
  res.write(`event: connected\ndata: ${JSON.stringify({ clientId })}\n\n`);
  clients.set(clientId, res);
  logger.info(`[SSE] Client connected: ${clientId} | Total: ${clients.size}`);

  // Heartbeat every 25s to prevent proxy timeouts
  const heartbeat = setInterval(() => {
    res.write(`: heartbeat\n\n`);
  }, 25000);

  req.on('close', () => {
    clearInterval(heartbeat);
    clients.delete(clientId);
    logger.info(`[SSE] Client disconnected: ${clientId} | Total: ${clients.size}`);
  });
});

// Recent activity snapshot — initial load
router.get('/recent', async (req: Request, res: Response) => {
  const [recentBookings, recentAIQueries, queueStats] = await Promise.all([
    prisma.booking.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        farmer: { select: { name: true } },
        equipment: { select: { title: true } },
      },
    }),
    prisma.aIQuery.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { id: true, featureType: true, createdAt: true, user: { select: { name: true } } },
    }),
    getQueueStats(),
  ]);

  const events = [
    ...recentBookings.map((b) => ({
      type: 'booking',
      message: `${b.farmer?.name} booked ${b.equipment?.title}`,
      status: b.status,
      timestamp: b.createdAt,
    })),
    ...recentAIQueries.map((q) => ({
      type: 'ai_query',
      message: `${q.user?.name ?? 'User'} used ${q.featureType.replace('_', ' ')}`,
      timestamp: q.createdAt,
    })),
  ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10);

  res.json({ success: true, data: { events, queueStats } });
});

export const ActivityRoutes = router;
