import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma";

export enum UserRole {
  ADMIN = "ADMIN",
  FARMER = "FARMER",
  PROVIDER = "PROVIDER",
}

const auth = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.headers.authorization;

      if (!token) {
        throw new Error("Token not found!!");
      }

      if (token.startsWith("Bearer ")) {
        token = token.split(" ")[1];
      }

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET?.trim() as string
      ) as JwtPayload;

      const userData = await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
      });

      if (!userData) {
        throw new Error("User not found!");
      }

      if (roles.length && !roles.includes(userData.role as UserRole)) {
        throw new Error("Unauthorized access!");
      }

      req.user = decoded;

      next();
    } catch (error: any) {
      console.error("Auth Middleware Error:", error.message);
      res.status(401).json({
        success: false,
        message: error.message || "Unauthorized",
      });
    }
  };
};

export default auth;