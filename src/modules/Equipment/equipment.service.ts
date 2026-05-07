import { PrismaClient, Equipment } from '@prisma/client';
import { ICreateEquipmentInput, IEquipmentFilterRequest } from './equipment.interface';
import { EQUIPMENT_SEARCHABLE_FIELDS } from './equipment.constant';

const prisma = new PrismaClient();

const createEquipment = async (providerId: string, payload: ICreateEquipmentInput): Promise<Equipment> => {
  return await prisma.equipment.create({
    data: {
      ...payload,
      providerId
    }
  });
};

const getAllEquipment = async (filters: IEquipmentFilterRequest) => {
  const { searchTerm, categoryId, minPrice, maxPrice } = filters;
  const conditions = [];

  if (searchTerm) {
    conditions.push({
      OR: EQUIPMENT_SEARCHABLE_FIELDS.map((field) => ({
        [field]: { contains: searchTerm, mode: 'insensitive' }
      }))
    });
  }

  if (categoryId) conditions.push({ categoryId });
  if (minPrice) conditions.push({ pricePerDay: { gte: Number(minPrice) } });
  if (maxPrice) conditions.push({ pricePerDay: { lte: Number(maxPrice) } });

  return await prisma.equipment.findMany({
    where: conditions.length > 0 ? { AND: conditions } : {},
    include: { category: true, provider: { select: { name: true } } }
  });
};

export const EquipmentService = {
  createEquipment,
  getAllEquipment
};