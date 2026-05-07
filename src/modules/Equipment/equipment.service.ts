import { Equipment } from '../../generated/prisma/client';
import { prisma } from '../../lib/prisma';
import { ICreateEquipmentInput, IEquipmentFilterRequest } from './equipment.interface';
import { EQUIPMENT_SEARCHABLE_FIELDS } from './equipment.constant';

const createEquipment = async (providerId: string, payload: ICreateEquipmentInput): Promise<Equipment> => {
  return await prisma.equipment.create({
    data: {
      ...payload,
      providerId
    }
  });
};

const getAllEquipment = async (filters: IEquipmentFilterRequest) => {
  const { searchTerm, categoryId, minPrice, maxPrice, page = 1, limit = 10 } = filters;
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

  const skip = (Number(page) - 1) * Number(limit);
  const take = Number(limit);

  return await prisma.equipment.findMany({
    where: conditions.length > 0 ? { AND: conditions } : {},
    include: { 
      category: true, 
      provider: { 
        select: { 
          id: true,
          name: true,
          email: true,
          avatar: true
        } 
      } 
    },
    skip,
    take,
    orderBy: {
      createdAt: 'desc'
    }
  });
};

export const EquipmentService = {
  createEquipment,
  getAllEquipment
};