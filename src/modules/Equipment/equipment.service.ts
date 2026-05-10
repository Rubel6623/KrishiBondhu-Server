import { Equipment, Prisma } from '../../generated/prisma/client';
import { prisma } from '../../lib/prisma';
import { ICreateEquipmentInput, IEquipmentFilterRequest } from './equipment.interface';
import { EQUIPMENT_SEARCHABLE_FIELDS } from './equipment.constant';
import { cacheGet, cacheSet, cacheFlushPattern } from '../../utils/cache';
import logger from '../../utils/logger';

const CACHE_TTL = 120; // 2 minutes for equipment (changes more often)

const createEquipment = async (providerId: string, payload: ICreateEquipmentInput): Promise<Equipment> => {
  const result = await prisma.equipment.create({ data: { ...payload, providerId } });
  cacheFlushPattern('equipment:');
  logger.info(`[Equipment] Created: "${result.title}" by provider ${providerId}`);
  return result;
};

const getAllEquipment = async (filters: IEquipmentFilterRequest) => {
  const { searchTerm, categoryId, providerId, minPrice, maxPrice, page = 1, limit = 10 } = filters;

  // Only cache non-filtered, first-page queries
  const isDefaultQuery = !searchTerm && !categoryId && !providerId && !minPrice && !maxPrice && Number(page) === 1;
  const cacheKey = `equipment:all:p${page}:l${limit}`;

  if (isDefaultQuery) {
    const cached = cacheGet<any[]>(cacheKey);
    if (cached) {
      logger.info(`[Cache] HIT ${cacheKey}`);
      return cached;
    }
  }

  const conditions: Prisma.EquipmentWhereInput[] = [];
  if (searchTerm) {
    conditions.push({
      OR: EQUIPMENT_SEARCHABLE_FIELDS.map((field) => ({
        [field]: { contains: searchTerm, mode: 'insensitive' as Prisma.QueryMode },
      })),
    });
  }
  if (categoryId) conditions.push({ categoryId });
  if (providerId) conditions.push({ providerId });
  if (minPrice) conditions.push({ pricePerDay: { gte: Number(minPrice) } });
  if (maxPrice) conditions.push({ pricePerDay: { lte: Number(maxPrice) } });

  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);

  const data = await prisma.equipment.findMany({
    where: conditions.length > 0 ? { AND: conditions } : {},
    include: {
      category: true,
      provider: { select: { id: true, name: true, email: true, avatar: true } },
    },
    skip,
    take,
    orderBy: { createdAt: 'desc' },
  });

  if (isDefaultQuery) {
    cacheSet(cacheKey, data, CACHE_TTL);
  }

  return data;
};

const getSingleEquipment = async (id: string): Promise<Equipment | null> => {
  const cacheKey = `equipment:id:${id}`;
  const cached = cacheGet<Equipment>(cacheKey);
  if (cached) {
    logger.info(`[Cache] HIT ${cacheKey}`);
    return cached;
  }

  const data = await prisma.equipment.findUnique({
    where: { id },
    include: {
      category: true,
      provider: { select: { id: true, name: true, email: true, avatar: true } },
      reviews: { include: { user: { select: { name: true, avatar: true } } } },
    },
  });

  if (data) cacheSet(cacheKey, data, CACHE_TTL);
  return data;
};

const updateEquipment = async (id: string, payload: Partial<ICreateEquipmentInput>): Promise<Equipment> => {
  const result = await prisma.equipment.update({ where: { id }, data: payload });
  cacheFlushPattern('equipment:');
  logger.info(`[Equipment] Updated: ${id}`);
  return result;
};

const deleteEquipment = async (id: string): Promise<Equipment> => {
  const result = await prisma.equipment.delete({ where: { id } });
  cacheFlushPattern('equipment:');
  logger.info(`[Equipment] Deleted: ${id}`);
  return result;
};

export const EquipmentService = {
  createEquipment,
  getAllEquipment,
  getSingleEquipment,
  updateEquipment,
  deleteEquipment,
};