import { Notification } from '../../generated/prisma/client';
import { prisma } from '../../lib/prisma';
import { ICreateNotificationInput } from './notifications.interface';

const createNotification = async (payload: ICreateNotificationInput) => {
  return await prisma.notification.create({
    data: payload,
  });
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