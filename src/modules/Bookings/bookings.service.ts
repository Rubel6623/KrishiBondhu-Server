import { BookingStatus } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { IBooking, ICreateBookingInput } from "./bookings.interface";

const createBooking = async (userId: string, payload: ICreateBookingInput): Promise<IBooking> => {

  const equipment = await prisma.equipment.findUnique({ where: { id: payload.equipmentId } });
  
  if (!equipment) {
    throw new Error("Equipment not found");
  }
  
  const startDate = new Date(payload.startDate);
  const endDate = new Date(payload.endDate);
  
  if (startDate >= endDate) {
    throw new Error("End date must be after start date");
  }
  
  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = equipment.pricePerDay * days;
  
  return await prisma.booking.create({
    data: {
      farmerId: userId,
      equipmentId: payload.equipmentId,
      status: "PENDING",
      startDate,
      endDate,
      totalPrice,
    }
  });
};

const getMyBookings = async (userId: string, role: string, filters: any) => {
  const query: any = {};
  
  if (role === "FARMER") {
    query.farmerId = userId;
  } else if (role === "PROVIDER") {
    query.equipment = { providerId: userId };
  }
  
  if (filters.status) {
    query.status = filters.status;
  }
  
  return await prisma.booking.findMany({
    where: query,
    include: {
      equipment: {
        include: {
          category: true,
          provider: { select: { id: true, name: true, email: true, avatar: true } }
        }
      },
      farmer: { select: { id: true, name: true, email: true, phone: true, location: true } }
    },
    orderBy: { createdAt: "desc" }
  });
};

const updateBookingStatus = async (bookingId: string, status: BookingStatus, userId: string) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: { equipment: { select: { providerId: true } } }
  });
  
  if (!booking) {
    throw new Error("Booking not found");
  }
  
  // Authorization check
  if (booking.equipment.providerId !== userId) {
    throw new Error("Unauthorized: Only the equipment provider can update status");
  }
  
  return await prisma.booking.update({
    where: { id: bookingId },
    data: { status },
    include: {
      equipment: {
        include: { category: true, provider: { select: { id: true, name: true, email: true, avatar: true } } }
      },
      farmer: { select: { id: true, name: true, email: true, phone: true, location: true } }
    }
  });
};

const cancelBooking = async (bookingId: string, userId: string) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: { equipment: { select: { providerId: true } } }
  });
  
  if (!booking) {
    throw new Error("Booking not found");
  }
  
  // Authorization check
  if (booking.equipment.providerId !== userId) {
    throw new Error("Unauthorized: Only the equipment provider can cancel booking");
  }
  
  return await prisma.booking.update({
    where: { id: bookingId },
    data: { status: "CANCELLED" },
    include: {
      equipment: {
        include: { category: true, provider: { select: { id: true, name: true, email: true, avatar: true } } }
      },
      farmer: { select: { id: true, name: true, email: true, phone: true, location: true } }
    }
  });
};

export const BookingsService = {
  createBooking,
  getMyBookings,
  updateBookingStatus,
  cancelBooking
};