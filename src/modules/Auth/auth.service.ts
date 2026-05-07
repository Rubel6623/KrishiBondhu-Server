import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "../../generated/prisma/enums";


interface ILoginPayload {
  email: string;
  password: string;
}

interface IRegisterPayload extends ILoginPayload {
  name: string;
  role: Role;
  avatar?: string;
  phone?: string;
  location?: string;
}

interface ISocialLoginPayload {
  email: string;
  name: string;
  avatar?: string;
}

const createUserIntoDB = async (payload: IRegisterPayload) => {
  const hashPassword = await bcrypt.hash(payload.password, 8);

  if (payload.role === Role.PROVIDER) {
    const result = await prisma.provider.create({
      data: {
        ...payload,
        password: hashPassword,
        role: payload.role as Role,
      },
    });
    const { password, ...newResult } = result;
    return newResult;
  } else {
    const result = await prisma.user.create({
      data: {
        ...payload,
        password: hashPassword,
        role: payload.role as Role,
      },
    });
    const { password, ...newResult } = result;
    return newResult;
  }
};

const loginUserIntoDB = async (payload: ILoginPayload) => {
  let user: any = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  let isProvider = false;

  if (!user) {
    user = await prisma.provider.findUnique({
      where: { email: payload.email },
    });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    isProvider = true;
  }

  const isPasswordValid = await bcrypt.compare(payload.password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(userData, (process.env.JWT_SECRET as string).trim(), {
    expiresIn: "1d",
  });

  return {
    token,
    user: userData,
  };
};

const socialLoginIntoDB = async (payload: ISocialLoginPayload) => {
  let user: any = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) {
    user = await prisma.provider.findUnique({
      where: { email: payload.email },
    });
  }

  if (!user) {
    // Create user if not exists
    user = await prisma.user.create({
      data: {
        email: payload.email,
        name: payload.name,
        avatar: payload.avatar,
        password: await bcrypt.hash(Math.random().toString(36).slice(-8), 8),
        role: Role.FARMER, // Default role for social login
      },
    });
  }

  const userData = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(userData, (process.env.JWT_SECRET as string).trim(), {
    expiresIn: "1d",
  });

  return {
    token,
    user: userData,
  };
};

const getMeFromDB = async (userId: string) => {
  let result: any = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      avatar: true,
      phone: true,
      location: true,
      isVerified: true,
      createdAt: true,
    },
  });

  if (!result) {
    result = await prisma.provider.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        phone: true,
        location: true,
        isVerified: true,
        createdAt: true,
      },
    });
  }
  return result;
};

const updateMeInDB = async (
  userId: string,
  payload: Partial<IRegisterPayload>
) => {
  let user: any = await prisma.user.findUnique({ where: { id: userId } });
  
  if (user) {
    return await prisma.user.update({
      where: { id: userId },
      data: payload,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        phone: true,
        location: true,
        createdAt: true,
      },
    });
  } else {
    return await prisma.provider.update({
      where: { id: userId },
      data: payload,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        phone: true,
        location: true,
        createdAt: true,
      },
    });
  }
};

export const AuthService = {
  createUserIntoDB,
  loginUserIntoDB,
  socialLoginIntoDB,
  getMeFromDB,
  updateMeInDB,
};
