import { prisma } from '../../lib/prisma';
import { emitToUser } from '../../utils/socket';
import { ICreateNotificationInput } from './notifications.interface';

const createNotification = async (payload: ICreateNotificationInput) => {
  const notification = await prisma.notification.create({
    data: payload,
  });

  // Emit real-time notification via Socket.io
  if (payload.userId) {
    emitToUser(payload.userId, 'new_notification', notification);
  }
  if (payload.providerId) {
    emitToUser(payload.providerId, 'new_notification', notification);
  }

  return notification;
};

const getMyNotifications = async (userId: string) => {
  return await prisma.notification.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

const markAsRead = async (id: string) => {
  return await prisma.notification.update({
    where: {
      id,
    },
    data: {
      isRead: true,
    },
  });
};

const markAllAsRead = async (userId: string) => {
  return await prisma.notification.updateMany({
    where: {
      userId,
      isRead: false,
    },
    data: {
      isRead: true,
    },
  });
};

export const NotificationsService = {
  createNotification,
  getMyNotifications,
  markAsRead,
  markAllAsRead
};