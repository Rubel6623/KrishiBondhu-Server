import { Router, Request, Response } from 'express';
import { prisma } from '../../lib/prisma';
import auth, { UserRole } from '../../middlewares/auth';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const router = Router();



// GET /api/chat/unread-count — get total unread messages
router.get(
  '/unread-count',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.VETERINARIAN),
  catchAsync(async (req: Request, res: Response) => {
    const userId = req.user?.id;

    const count = await prisma.chatMessage.count({
      where: {
        room: {
          OR: [
            { contextType: 'APPOINTMENT', contextId: { in: (await prisma.appointment.findMany({ where: { OR: [{ farmerId: userId }, { providerId: userId }, { specialist: { userId } }] }, select: { id: true } })).map(a => a.id) } },
            { contextType: 'BOOKING', contextId: { in: (await prisma.booking.findMany({ where: { OR: [{ farmerId: userId }, { equipment: { providerId: userId } }] }, select: { id: true } })).map(b => b.id) } }
          ]
        },
        senderId: { not: userId },
        isRead: false,
      },
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Unread count retrieved',
      data: { count },
    });
  })
);

// GET /api/chat/my-rooms — get all rooms user is involved in
router.get(
  '/my-rooms',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.VETERINARIAN),
  catchAsync(async (req: Request, res: Response) => {
    const userId = req.user?.id;

    // Find appointments where user is farmer, provider, or specialist
    const appointments = await prisma.appointment.findMany({
      where: {
        OR: [
          { farmerId: userId },
          { providerId: userId },
          { specialist: { userId } },
        ],
      },
      select: { id: true },
    });

    // Find bookings where user is farmer or provider
    const bookings = await prisma.booking.findMany({
      where: {
        OR: [
          { farmerId: userId },
          { equipment: { providerId: userId } },
        ],
      },
      select: { id: true },
    });

    const contextIds = [
      ...appointments.map((a) => a.id),
      ...bookings.map((b) => b.id),
    ];

    const rooms = await prisma.chatRoom.findMany({
      where: {
        contextId: { in: contextIds },
      },
      include: {
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // We also need to fetch details for each room (who is the other person?)
    // This part is a bit complex in a single query, so we'll do it in JS for now
    const roomsWithDetails = await Promise.all(
      rooms.map(async (room) => {
        let title = 'Chat';
        let subTitle = '';
        let avatar = null;

        if (room.contextType === 'APPOINTMENT') {
          const apt = await prisma.appointment.findUnique({
            where: { id: room.contextId },
            include: {
              farmer: true,
              provider: true,
              specialist: { include: { user: true } },
            },
          });
          if (apt) {
            if (apt.specialist.userId === userId) {
              const userObj = apt.farmer || apt.provider;
              title = userObj?.name || 'Patient';
              avatar = userObj?.avatar;
              subTitle = 'Consultation';
            } else {
              title = `Dr. ${apt.specialist.user.name}`;
              avatar = apt.specialist.user.avatar;
              subTitle = 'Veterinary Consultation';
            }
          }
        } else {
          const booking = await prisma.booking.findUnique({
            where: { id: room.contextId },
            include: {
              farmer: true,
              equipment: { include: { provider: true } },
            },
          });
          if (booking) {
            if (booking.farmerId === userId) {
              title = booking.equipment.provider.name;
              avatar = booking.equipment.provider.avatar;
              subTitle = booking.equipment.title;
            } else {
              title = booking.farmer.name;
              avatar = booking.farmer.avatar;
              subTitle = booking.equipment.title;
            }
          }
        }

        const unreadCount = await prisma.chatMessage.count({
          where: {
            roomId: room.id,
            senderId: { not: userId },
            isRead: false,
          },
        });

        return {
          ...room,
          title,
          subTitle,
          avatar,
          unreadCount,
          lastMessage: room.messages[0] || null,
        };
      })
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Chat rooms retrieved',
      data: roomsWithDetails,
    });
  })
);

// GET /api/chat/:contextType/:contextId — get or create room + history
router.get(
  '/:contextType/:contextId',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.VETERINARIAN),
  catchAsync(async (req: Request, res: Response) => {
    const { contextType, contextId } = req.params;

    const messageInclude = {
      messages: {
        orderBy: { createdAt: 'asc' as const },
        take: 100,
      },
    };

    const existing = await prisma.chatRoom.findFirst({
      where: { contextId: contextId as string, contextType: contextType as string },
      include: messageInclude,
    });

    const room = existing ?? await prisma.chatRoom.create({
      data: { contextType: contextType as string, contextId: contextId as string },
      include: messageInclude,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Chat room retrieved',
      data: room,
    });
  })
);

// PATCH /api/chat/mark-as-read/:roomId — mark all messages in room as read
router.patch(
  '/mark-as-read/:roomId',
  auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.VETERINARIAN),
  catchAsync(async (req: Request, res: Response) => {
    const { roomId } = req.params;
    const userId = req.user?.id;

    await prisma.chatMessage.updateMany({
      where: {
        roomId: roomId as string,
        senderId: { not: userId as string },
        isRead: false,
      },
      data: { isRead: true },
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Messages marked as read',
      data: null,
    });
  })
);

export const ChatRoutes = router;
