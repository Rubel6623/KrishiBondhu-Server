import { prisma } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Role } from "../../generated/prisma";

interface ILoginPayload {
  emailOrPhone: string;
  password: string;
}

interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
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
  const { password, ...userData } = payload;

  // Check if user already exists in either User or Provider table
  const existingUser = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  const existingProvider = await prisma.provider.findUnique({
    where: { email: payload.email },
  });

  if (existingUser || existingProvider) {
    throw new Error("User already exists with this email");
  }

  // Check if phone already exists (if provided)
  if (payload.phone) {
    const existingPhoneUser = await prisma.user.findUnique({
      where: { phone: payload.phone },
    });
    const existingPhoneProvider = await prisma.provider.findUnique({
      where: { phone: payload.phone },
    });

    if (existingPhoneUser || existingPhoneProvider) {
      throw new Error("User already exists with this phone number");
    }
  }

  const hashPassword = await bcrypt.hash(password, 8);

  if (payload.role === Role.PROVIDER) {
    const result = await prisma.provider.create({
      data: {
        ...userData,
        password: hashPassword,
        role: Role.PROVIDER,
      },
    });
    const { password: _, ...newResult } = result;
    return newResult;
  } else {
    const result = await prisma.user.create({
      data: {
        ...userData,
        password: hashPassword,
        role: payload.role as Role,
      },
    });
    const { password: _, ...newResult } = result;
    return newResult;
  }
};

const loginUserIntoDB = async (payload: any) => {
  const { emailOrPhone, email, phone, password } = payload;
  const identifier = emailOrPhone || email || phone;

  let user: any = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { phone: identifier }],
    },
  });

  if (!user) {
    user = await prisma.provider.findFirst({
      where: {
        OR: [{ email: identifier }, { phone: identifier }],
      },
    });
    if (!user) {
      throw new Error("Invalid credentials");
    }
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

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
  const { role, password, email, ...updateData } = payload;

  let user: any = await prisma.user.findUnique({ where: { id: userId } });

  if (user) {
    return await prisma.user.update({
      where: { id: userId },
      data: updateData,
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
      data: updateData,
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
