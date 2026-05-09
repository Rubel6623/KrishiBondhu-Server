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

const updateUserStatus = async (id: string, status: "ACTIVE" | "BANNED") => {
  return await prisma.user.update({
    where: { id },
    data: { isVerified: status === "ACTIVE" },
  });
};

const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};

export const UserService = {
  getAllUsers,
  getSingleUser,
  updateProfile,
  updateUserStatus,
  deleteUser,
};