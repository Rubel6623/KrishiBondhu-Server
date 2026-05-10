import { BookingStatus } from "../../generated/prisma";
import { prisma } from "../../lib/prisma";
import { IBooking, ICreateBookingInput } from "./bookings.interface";
import { enqueue } from "../../utils/queue";
import logger from "../../utils/logger";
import { broadcastActivity } from "../Activity/activity.route";
import { NotificationsService } from "../Notifications/notifications.service";

const createBooking = async (userId: string, payload: ICreateBookingInput): Promise<IBooking> => {
  const equipment = await prisma.equipment.findUnique({ where: { id: payload.equipmentId } });

  if (!equipment) throw new Error("Equipment not found");

  const startDate = new Date(payload.startDate);
  const endDate = new Date(payload.endDate);

  if (startDate >= endDate) throw new Error("End date must be after start date");

  const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = equipment.pricePerDay * days;

  const booking = await prisma.booking.create({
    data: { farmerId: userId, equipmentId: payload.equipmentId, status: "PENDING", startDate, endDate, totalPrice },
    include: { farmer: { select: { name: true } }, equipment: { select: { title: true } } },
  });

  logger.info(`[Booking] Created: ${booking.id} — Farmer: ${userId} — Equipment: ${equipment.title} — ৳${totalPrice}`);

  // Broadcast real-time SSE event
  broadcastActivity('new_booking', {
    message: `${(booking as any).farmer?.name} booked ${(booking as any).equipment?.title}`,
    status: 'PENDING',
    timestamp: booking.createdAt,
    targetUserId: equipment.providerId,
    type: 'NOTIFICATION'
  });

  // Enqueue background notification (non-blocking)
  enqueue({
    name: `notify:booking:${booking.id}`,
    fn: async () => {
      await NotificationsService.createNotification({
        userId,
        title: 'Booking Confirmed',
        message: `Your booking for "${equipment.title}" has been placed successfully for ৳${totalPrice}.`,
        type: 'BOOKING',
        bookingId: booking.id,
      });

      // Also notify the provider
      await NotificationsService.createNotification({
        providerId: equipment.providerId,
        title: 'New Booking Received',
        message: `${booking.farmer?.name} has booked your "${equipment.title}".`,
        type: 'BOOKING',
        bookingId: booking.id,
      });
    },
    onSuccess: () => logger.info(`[Queue] Booking notification sent for ${booking.id}`),
    onError: (err) => logger.error(`[Queue] Notification failed for ${booking.id}: ${err.message}`),
  });

  return booking as IBooking;
};

const getMyBookings = async (userId: string, role: string, filters: any) => {
  const query: any = {};

  if (role === "FARMER") query.farmerId = userId;
  else if (role === "PROVIDER") query.equipment = { providerId: userId };

  if (filters.status) query.status = filters.status;

  logger.info(`[Booking] Fetch — Role: ${role} — User: ${userId}`);

  return await prisma.booking.findMany({
    where: query,
    include: {
      equipment: {
        include: {
          category: true,
          provider: { select: { id: true, name: true, email: true, avatar: true } },
        },
      },
      farmer: { select: { id: true, name: true, email: true, phone: true, location: true } },
    },
    orderBy: { createdAt: "desc" },
  });
};

const updateBookingStatus = async (bookingId: string, status: BookingStatus, userId: string) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: { equipment: { select: { providerId: true, title: true } }, farmer: { select: { id: true, name: true } } },
  });

  if (!booking) throw new Error("Booking not found");
  if (booking.equipment.providerId !== userId) throw new Error("Unauthorized: Only the equipment provider can update status");

  const updated = await prisma.booking.update({
    where: { id: bookingId },
    data: { status },
    include: {
      equipment: { include: { category: true, provider: { select: { id: true, name: true, email: true, avatar: true } } } },
      farmer: { select: { id: true, name: true, email: true, phone: true, location: true } },
    },
  });

  logger.info(`[Booking] Status updated: ${bookingId} → ${status}`);

  // Queue a status notification to the farmer
  enqueue({
    name: `notify:status:${bookingId}`,
    fn: async () => {
      if (booking.farmer?.id) {
        await NotificationsService.createNotification({
          userId: booking.farmer.id,
          title: `Booking ${status}`,
          message: `Your booking for "${booking.equipment.title}" has been updated to ${status}.`,
          type: 'BOOKING',
          bookingId: booking.id,
        });
      }
    },
    onSuccess: () => logger.info(`[Queue] Status notification sent — Booking: ${bookingId}`),
    onError: (err) => logger.error(`[Queue] Status notification failed: ${err.message}`),
  });

  // Broadcast real-time status update
  broadcastActivity('booking_status_update', {
    message: `Your booking for "${booking.equipment.title}" has been updated to ${status}.`,
    status,
    timestamp: new Date(),
    targetUserId: booking.farmerId,
    type: 'NOTIFICATION'
  });

  return updated;
};

const cancelBooking = async (bookingId: string, userId: string) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: { equipment: { select: { providerId: true } } },
  });

  if (!booking) throw new Error("Booking not found");
  if (booking.equipment.providerId !== userId) throw new Error("Unauthorized: Only the equipment provider can cancel booking");

  const result = await prisma.booking.update({
    where: { id: bookingId },
    data: { status: "CANCELLED" },
    include: {
      equipment: { include: { category: true, provider: { select: { id: true, name: true, email: true, avatar: true } } } },
      farmer: { select: { id: true, name: true, email: true, phone: true, location: true } },
    },
  });

  logger.info(`[Booking] Cancelled: ${bookingId}`);
  return result;
};

export const BookingsService = {
  createBooking,
  getMyBookings,
  updateBookingStatus,
  cancelBooking,
};