import { prisma } from '../../lib/prisma';
import { IProviderFilterRequest } from './providers.interface';
import { Prisma } from '../../generated/prisma/client';

const getAllProviders = async (filters: IProviderFilterRequest) => {
  const { searchTerm, location, page = 1, limit = 10 } = filters;
  const conditions: Prisma.ProviderWhereInput[] = [];

  if (searchTerm) {
    conditions.push({
      OR: [
        { name: { contains: searchTerm, mode: 'insensitive' as Prisma.QueryMode } },
        { email: { contains: searchTerm, mode: 'insensitive' as Prisma.QueryMode } },
      ],
    });
  }

  if (location) {
    conditions.push({ location: { contains: location, mode: 'insensitive' as Prisma.QueryMode } });
  }

  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);

  const result = await prisma.provider.findMany({
    where: conditions.length > 0 ? { AND: conditions } : {},
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      location: true,
      avatar: true,
      isVerified: true,
      createdAt: true,
      equipment: {
        select: {
          id: true,
          title: true,
          pricePerDay: true,
          images: true,
          rating: true,
        },
      },
    },
    skip,
    take,
    orderBy: {
      createdAt: 'desc',
    },
  });

  const total = await prisma.provider.count({
    where: conditions.length > 0 ? { AND: conditions } : {},
  });

  return {
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPage: Math.ceil(total / Number(limit)),
    },
    data: result,
  };
};

const getProviderById = async (id: string) => {
  return await prisma.provider.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      location: true,
      avatar: true,
      isVerified: true,
      createdAt: true,
      equipment: {
        include: {
          category: true,
        },
      },
    },
  });
};

export const ProvidersService = {
  getAllProviders,
  getProviderById,
};