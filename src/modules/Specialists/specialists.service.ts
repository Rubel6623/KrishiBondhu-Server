import { prisma } from '../../lib/prisma';
import { cacheGet, cacheSet, cacheFlushPattern } from '../../utils/cache';

const CACHE_KEY_ALL = 'specialists:all';
const CACHE_TTL = 300; // 5 minutes

const getAllSpecialists = async () => {
  const cached = cacheGet<any[]>(CACHE_KEY_ALL);
  if (cached) return cached;

  const data = await prisma.specialistProfile.findMany({
    where: {
      user: {
        role: 'VETERINARIAN'
      }
    },
    include: {
      user: {
        select: {
          id: true, name: true, email: true,
          phone: true, location: true, avatar: true, isVerified: true,
        },
      },
    },
  });

  cacheSet(CACHE_KEY_ALL, data, CACHE_TTL);
  return data;
};

const getSpecialistById = async (id: string) => {
  const cacheKey = `specialists:id:${id}`;
  const cached = cacheGet<any>(cacheKey);
  if (cached) return cached;

  const data = await prisma.specialistProfile.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true, name: true, email: true,
          phone: true, location: true, avatar: true, isVerified: true,
        },
      },
    },
  });

  if (data) cacheSet(cacheKey, data, CACHE_TTL);
  return data;
};

const getSpecialistByUserId = async (userId: string) => {
  return await prisma.specialistProfile.findUnique({
    where: { userId },
    include: {
      user: {
        select: {
          id: true, name: true, email: true,
          phone: true, location: true, avatar: true, isVerified: true,
        },
      },
    },
  });
};

const upsertSpecialistProfile = async (userId: string, data: any) => {
  const result = await prisma.specialistProfile.upsert({
    where: { userId },
    update: data,
    create: { ...data, userId },
  });

  // Invalidate all specialist caches on profile update
  cacheFlushPattern('specialists:');
  return result;
};

const deleteSpecialist = async (profileId: string) => {
  const profile = await prisma.specialistProfile.findUnique({ where: { id: profileId } });
  if (!profile) throw new Error('Specialist not found');
  await prisma.specialistProfile.delete({ where: { id: profileId } });
  cacheFlushPattern('specialists:');
  return { message: 'Specialist removed successfully' };
};

export const SpecialistService = {
  getAllSpecialists,
  getSpecialistById,
  getSpecialistByUserId,
  upsertSpecialistProfile,
  deleteSpecialist,
};