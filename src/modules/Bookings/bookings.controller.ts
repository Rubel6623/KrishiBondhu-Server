import { Request, Response } from "express";
import httpStatus from "http-status";
import { BookingStatus } from "../../generated/prisma";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingsService } from "./bookings.service";

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await BookingsService.createBooking(userId, req.body);
  
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Booking created successfully",
    data: result
  });
});

const getMyBookings = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const role = (req as any).user.role;
  const filters = req.query;
  const result = await BookingsService.getMyBookings(userId, role, filters);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result
  });
});

const updateBookingStatus = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { id } = req.params;
  const status = req.body.status;
  
  const result = await BookingsService.updateBookingStatus(id as string, status as BookingStatus, userId as string);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking status updated successfully",
    data: result
  });
});

const cancelBooking = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { id } = req.params;
  
  const result = await BookingsService.cancelBooking(id as string, userId as string);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking cancelled successfully",
    data: result
  });
});

export const BookingsController = {
  createBooking,
  getMyBookings,
  updateBookingStatus,
  cancelBooking
};