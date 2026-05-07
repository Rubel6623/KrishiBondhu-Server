import { Role } from '../../generated/prisma/client';

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  location?: string | null;
  avatar?: string | null;
  role: Role;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdateInput {
  name?: string;
  phone?: string;
  location?: string;
  avatar?: string;
}