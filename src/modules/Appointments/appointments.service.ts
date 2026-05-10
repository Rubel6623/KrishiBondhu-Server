import { BookingStatus } from '../../generated/prisma';
import { prisma } from '../../lib/prisma';
import { ICreateAppointmentInput } from './appointments.interface';
import logger from '../../utils/logger';
import { broadcastActivity } from '../Activity/activity.route';
import { NotificationsService } from '../Notifications/notifications.service';
import { emitToUser } from '../../utils/socket';

const createAppointment = async (userId: string, payload: ICreateAppointmentInput) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });

  const provider = !user ? await prisma.provider.findUnique({
    where: { id: userId }
  }) : null;

  if (!user && !provider) {
    throw new Error("Account not found. You must be logged in as a Farmer or Provider to book.");
  }

  const specialist = await prisma.specialistProfile.findUnique({
    where: { id: payload.specialistId },
    include: { user: true }
  });

  if (!specialist) throw new Error("Specialist not found");

  const appointment = await prisma.appointment.create({
    data: {
      farmerId: user ? userId : null,
      providerId: provider ? userId : null,
      specialistId: payload.specialistId,
      appointmentDate: new Date(payload.appointmentDate),
      problemDesc: payload.problemDesc,
      status: 'PENDING'
    },
    include: {
      farmer: { select: { name: true } },
      provider: { select: { name: true } },
      specialist: { include: { user: { select: { name: true } } } }
    }
  });

  const bookerName = appointment.farmer?.name || appointment.provider?.name || "User";
  logger.info(`[Appointment] Created: ${appointment.id} — Booker: ${bookerName} — Specialist: ${specialist.user.name}`);

  // Broadcast real-time SSE event
  broadcastActivity('new_appointment', {
    message: `${bookerName} booked an appointment with Dr. ${appointment.specialist.user.name}`,
    status: 'PENDING',
    timestamp: appointment.createdAt,
    targetUserId: specialist.userId,
    type: 'NOTIFICATION'
  });

  // Create notification for specialist
  await NotificationsService.createNotification({
    userId: specialist.userId,
    title: 'New Appointment Request',
    message: `${bookerName} has requested an appointment for ${new Date(payload.appointmentDate).toLocaleDateString()}.`,
    type: 'APPOINTMENT',
    appointmentId: appointment.id,
  });

  return appointment;
};

const getMyAppointments = async (userId: string, role: string) => {
  const query: any = {};

  if (role === 'FARMER') query.farmerId = userId;
  else if (role === 'PROVIDER') query.providerId = userId;
  else if (role === 'VETERINARIAN') {
    query.specialist = {
      userId: userId
    };
  }

  return await prisma.appointment.findMany({
    where: query,
    include: {
      farmer: { select: { id: true, name: true, email: true, phone: true, avatar: true } },
      provider: { select: { id: true, name: true, email: true, avatar: true } },
      specialist: {
        include: {
          user: { select: { id: true, name: true, email: true, avatar: true } }
        }
      }
    },
    orderBy: { createdAt: 'desc' }
  });
};

const updateAppointmentStatus = async (appointmentId: string, status: BookingStatus, userId: string) => {
  const appointment = await prisma.appointment.findUnique({
    where: { id: appointmentId },
    include: { specialist: true, farmer: true, provider: true }
  });

  if (!appointment) throw new Error("Appointment not found");
  if (appointment.specialist.userId !== userId) throw new Error("Unauthorized");

  const result = await prisma.appointment.update({
    where: { id: appointmentId },
    data: { status },
    include: {
      farmer: { select: { id: true, name: true } },
      provider: { select: { id: true, name: true } },
      specialist: { include: { user: { select: { name: true } } } }
    }
  });

  // Notify booker (Farmer or Provider)
  if (appointment.farmerId) {
    await NotificationsService.createNotification({
      userId: appointment.farmerId,
      title: `Appointment ${status}`,
      message: `Your appointment with Dr. ${result.specialist.user.name} has been ${status.toLowerCase()}.`,
      type: 'APPOINTMENT',
      appointmentId: appointment.id,
    });
  } else if (appointment.providerId) {
    await NotificationsService.createNotification({
      providerId: appointment.providerId,
      title: `Appointment ${status}`,
      message: `Your appointment with Dr. ${result.specialist.user.name} has been ${status.toLowerCase()}.`,
      type: 'APPOINTMENT',
      appointmentId: appointment.id,
    });
  }

  const bookerId = appointment.farmerId || appointment.providerId;

  // Broadcast real-time status update
  broadcastActivity('appointment_status_update', {
    message: `Your appointment with Dr. ${result.specialist.user.name} has been ${status.toLowerCase()}.`,
    appointmentId,
    status,
    timestamp: new Date(),
    targetUserId: bookerId,
    type: 'NOTIFICATION'
  });

  // Also emit via Socket.io for the dashboard listeners
  if (bookerId) {
    emitToUser(bookerId, 'appointment_status_update', {
      appointmentId,
      status,
      message: `Your appointment with Dr. ${result.specialist.user.name} has been ${status.toLowerCase()}.`
    });
  }


  return result;
};

export const AppointmentService = {
  createAppointment,
  getMyAppointments,
  updateAppointmentStatus
};
