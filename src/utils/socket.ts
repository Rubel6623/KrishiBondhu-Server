import { Server as HttpServer } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import jwt, { JwtPayload } from 'jsonwebtoken';
import logger from './logger';

let io: SocketServer;
const userSockets = new Map<string, string[]>(); // userId -> socketIds[]

export const initSocket = (httpServer: HttpServer) => {
  io = new SocketServer(httpServer, {
    cors: {
      origin: process.env.NEXT_PUBLIC_CLIENT_URL || 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true,
    },
    path: '/socket.io',
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth?.token;
    if (!token) return next(new Error('Authentication error'));

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET?.trim() as string) as JwtPayload;
      (socket as any).user = decoded;
      next();
    } catch (err) {
      next(new Error('Authentication error'));
    }
  });

  io.on('connection', (socket: Socket) => {
    const user = (socket as any).user;
    const userId = user.id;

    logger.info(`[Socket] Connected: ${user.name} (${userId})`);

    // Add to mapping
    const existing = userSockets.get(userId) || [];
    userSockets.set(userId, [...existing, socket.id]);

    socket.on('disconnect', () => {
      const current = userSockets.get(userId) || [];
      const updated = current.filter(id => id !== socket.id);
      if (updated.length > 0) {
        userSockets.set(userId, updated);
      } else {
        userSockets.delete(userId);
      }
      logger.info(`[Socket] Disconnected: ${user.name}`);
    });
  });

  logger.info('[Socket] Global Socket.IO initialized');
  return io;
};

export const getIO = () => {
  if (!io) throw new Error('Socket.io not initialized');
  return io;
};

export const emitToUser = (userId: string, event: string, data: any) => {
  const socketIds = userSockets.get(userId);
  if (socketIds) {
    socketIds.forEach(id => {
      io.to(id).emit(event, data);
    });
    return true;
  }
  return false;
};
