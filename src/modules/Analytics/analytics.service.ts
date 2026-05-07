import { prisma } from '../../lib/prisma';
import { IAdminStats, IProviderStats } from './analytics.interface';

const getAdminStats = async (): Promise<IAdminStats> => {
  const totalUsers = await prisma.user.count();
  const totalFarmers = await prisma.user.count({ where: { role: 'FARMER' } });
  const totalProviders = await prisma.user.count({ where: { role: 'PROVIDER' } });
  const totalEquipment = await prisma.equipment.count();
  const totalBookings = await prisma.booking.count();
  const totalRevenue = await prisma.booking.aggregate({
    _sum: {
      totalPrice: true,
    },
  });

  const recentBookings = await prisma.booking.findMany({
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      farmer: { select: { name: true } },
      equipment: { select: { title: true } },
    },
  });

  const equipmentStats = await prisma.equipment.findMany({
    take: 5,
    orderBy: {
      rating: 'desc',
    },
    select: {
      title: true,
      rating: true,
      _count: {
        select: { bookings: true },
      },
    },
  });

  return {
    totalUsers,
    totalFarmers,
    totalProviders,
    totalEquipment,
    totalBookings,
    totalRevenue: totalRevenue._sum.totalPrice || 0,
    recentBookings,
    topEquipment: equipmentStats,
  };
};

const getProviderStats = async (providerId: string): Promise<IProviderStats> => {
  const myEquipmentCount = await prisma.equipment.count({
    where: { providerId },
  });

  const myBookingsCount = await prisma.booking.count({
    where: {
      equipment: {
        providerId,
      },
    },
  });

  const totalEarnings = await prisma.booking.aggregate({
    where: {
      equipment: {
        providerId,
      },
      status: 'COMPLETED',
    },
    _sum: {
      totalPrice: true,
    },
  });

  return {
    equipmentCount: myEquipmentCount,
    bookingsCount: myBookingsCount,
    totalEarnings: totalEarnings._sum.totalPrice || 0,
  };
};

export const AnalyticsService = {
  getAdminStats,
  getProviderStats,
};