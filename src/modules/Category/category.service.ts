import { prisma } from '../../lib/prisma';
import { ICreateCategory, IUpdateCategory } from './category.interface';
import { CategorySearchableFields } from './category.constant';
import { Prisma } from '../../generated/prisma/client';

const createCategory = async (payload: ICreateCategory) => {
  return await prisma.category.create({
    data: payload,
  });
};

const getAllCategories = async (filters: any) => {
  const { searchTerm } = filters;
  const conditions: Prisma.CategoryWhereInput[] = [];

  if (searchTerm) {
    conditions.push({
      OR: CategorySearchableFields.map((field) => ({
        [field]: { contains: searchTerm, mode: 'insensitive' as Prisma.QueryMode },
      })),
    });
  }

  return await prisma.category.findMany({
    where: conditions.length > 0 ? { AND: conditions } : {},
    orderBy: {
      name: 'asc',
    },
  });
};

const getCategoryById = async (id: string) => {
  return await prisma.category.findUnique({
    where: { id },
  });
};

const updateCategory = async (id: string, payload: IUpdateCategory) => {
  return await prisma.category.update({
    where: { id },
    data: payload,
  });
};

const deleteCategory = async (id: string) => {
  return await prisma.category.delete({
    where: { id },
  });
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};