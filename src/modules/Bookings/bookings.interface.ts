import { BookingStatus } from '../../generated/prisma';

export interface IBooking {
  id: string;
  farmerId: string;
  equipmentId: string;
  status: BookingStatus;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateBookingInput {
  equipmentId: string;
  startDate: string; // Received as ISO string from frontend
  endDate: string;
}

export interface IBookingFilterRequest {
  status?: BookingStatus;
  farmerId?: string;
  providerId?: string;
}