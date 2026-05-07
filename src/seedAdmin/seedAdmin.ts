import { Role } from "../generated/prisma/client";
import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const seedAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPhone = process.env.ADMIN_PHONE;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminName = process.env.NAME;

    if (!adminEmail || !adminPhone || !adminPassword || !adminName) {
      console.log("Skipping Admin seeding: Missing required fields in .env");
      return;
    }

    const adminExists = await prisma.user.findFirst({
      where: {
        OR: [
          { email: adminEmail },
          { phone: adminPhone }
        ]
      },
    });

    if (!adminExists) {
      const hashedPassword = await bcrypt.hash(adminPassword, 12);

      await prisma.user.create({
        data: {
          name: adminName,
          email: adminEmail,
          phone: adminPhone,
          role: Role.ADMIN,
          password: hashedPassword,
        },
      });
      console.log("Admin created successfully!!");
    } else {
      console.log("Admin already exists (matched email or phone)!!");
    }
  } catch (error) {
    console.error("Error seeding admin:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedAdmin();