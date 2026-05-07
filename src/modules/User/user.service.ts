import { prisma } from '../../lib/prisma';
import { IUserUpdateInput } from './user.interface';

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getSingleUser = async (id: string) => {
  return await prisma.user.findUnique({ where: { id } });
};

const updateProfile = async (
  id: string,
  payload: IUserUpdateInput
) => {
  return await prisma.user.update({
    where: { id },
    data: payload,
  });
};

export const UserService = {
  getAllUsers,
  getSingleUser,
  updateProfile,
};