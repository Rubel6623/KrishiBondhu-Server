import { Server as HttpServer } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { prisma } from '../../lib/prisma';
import logger from '../../utils/logger';
import fs from 'fs';
import path from 'path';

export const registerChatHandlers = (io: SocketServer) => {
  io.on('connection', async (socket: Socket) => {
    const token = socket.handshake.auth?.token;

    if (!token) {
      socket.disconnect(true);
      return;
    }

    let decoded: JwtPayload;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET?.trim() as string) as JwtPayload;
    } catch {
      socket.disconnect(true);
      return;
    }

    const userId = decoded.id;
    const userName = decoded.name || 'Unknown';
    const userRole = decoded.role || 'USER';

    logger.info(`[Chat] Connected: ${userName} (${userRole}) — socket: ${socket.id}`);

    // ─── Join a chat room ─────────────────────────────────────────────────────
    socket.on('join_room', async ({ contextType, contextId }: { contextType: string; contextId: string }) => {
      try {
        // Verify access: user must be a participant of the appointment/booking
        const hasAccess = await verifyRoomAccess(userId, userRole, contextType, contextId);
        if (!hasAccess) {
          socket.emit('error', { message: 'You do not have access to this chat room.' });
          return;
        }

        // Find or create the chat room
        let room = await prisma.chatRoom.findFirst({
          where: { contextId, contextType },
        });
        if (!room) {
          room = await prisma.chatRoom.create({
            data: { contextType, contextId },
          });
        }

        const roomId = room.id;
        await socket.join(roomId);

        // Mark messages as read for this user
        await prisma.chatMessage.updateMany({
          where: {
            roomId,
            senderId: { not: userId },
            isRead: false,
          },
          data: { isRead: true },
        });

        // Send message history
        const history = await prisma.chatMessage.findMany({
          where: { roomId },
          orderBy: { createdAt: 'asc' },
          take: 50,
        });

        socket.emit('message_history', history);
        socket.emit('room_joined', { roomId });
        logger.info(`[Chat] ${userName} joined room: ${roomId}`);
      } catch (err: any) {
        const errorLog = `[${new Date().toISOString()}] join_room error: ${err.message}\n${err.stack}\n`;
        fs.appendFileSync(path.join(process.cwd(), 'chat_debug.log'), errorLog);
        console.error(`[Chat Debug] join_room error details:`, err);
        logger.error(`[Chat] join_room error: ${err.message}`);
        socket.emit('error', { message: `Failed to join chat room: ${err.message}` });
      }
    });

    // ─── Send a message ───────────────────────────────────────────────────────
    socket.on('send_message', async ({ roomId, content }: { roomId: string; content: string }) => {
      if (!content?.trim()) return;

      try {
        // Verify the socket is actually in this room
        if (!socket.rooms.has(roomId)) {
          socket.emit('error', { message: 'Not in this room.' });
          return;
        }

        const message = await prisma.chatMessage.create({
          data: {
            roomId,
            senderId: userId,
            senderName: userName,
            senderType: userRole === 'PROVIDER' ? 'PROVIDER' : 'USER',
            content: content.trim(),
          },
        });

        // Broadcast to everyone in the room (including sender)
        io.to(roomId).emit('new_message', message);

        // If there are other users in the room, they have read it "instantly"
        // In a real app, we'd check who is actually active. 
        // For simplicity, we'll let the 'join_room' and a separate 'mark_read' event handle it.

        logger.info(`[Chat] Message in room ${roomId} from ${userName}`);
      } catch (err: any) {
        logger.error(`[Chat] send_message error: ${err.message}`);
        socket.emit('error', { message: 'Failed to send message.' });
      }
    });

    socket.on('mark_read', async ({ roomId }: { roomId: string }) => {
      try {
        await prisma.chatMessage.updateMany({
          where: {
            roomId,
            senderId: { not: userId },
            isRead: false,
          },
          data: { isRead: true },
        });
        logger.info(`[Chat] ${userName} marked room ${roomId} as read`);
      } catch (err: any) {
        logger.error(`[Chat] mark_read error: ${err.message}`);
      }
    });

    socket.on('disconnect', () => {
      logger.info(`[Chat] Disconnected: ${userName}`);
    });
  });

  logger.info('[Chat] Socket.IO initialized');
  return io;
};

// ─── Access control ───────────────────────────────────────────────────────────
async function verifyRoomAccess(userId: string, role: string, contextType: string, contextId: string): Promise<boolean> {
  if (contextType === 'APPOINTMENT') {
    const apt = await prisma.appointment.findUnique({ where: { id: contextId } });
    if (!apt) return false;
    // Allowed: the farmer/provider who booked, or the specialist
    const specialist = await prisma.specialistProfile.findUnique({ where: { id: apt.specialistId } });
    return (
      apt.farmerId === userId ||
      apt.providerId === userId ||
      specialist?.userId === userId
    );
  }

  if (contextType === 'BOOKING') {
    const booking = await prisma.booking.findUnique({
      where: { id: contextId },
      include: { equipment: { select: { providerId: true } } },
    });
    if (!booking) return false;
    // Allowed: the farmer who booked, or the equipment provider
    return booking.farmerId === userId || booking.equipment.providerId === userId;
  }

  return false;
}
