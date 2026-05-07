import { Request, Response } from "express";
import httpStatus from "http-status";
import { BookingStatus } from "../../generated/prisma/enums";
import sendResponse from "../../utils/sendResponse";
import { BookingsService } from "./bookings.service";

const createBooking = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const result = await BookingsService.createBooking(userId, req.body);
    
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Booking created successfully",
      data: result
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
  }
};

const getMyBookings = async (req: Request, res: Response) => {
  try {
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
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
  }
};

const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const bookingId = req.params.id;
    const status = req.body.status;
    
    const result = await BookingsService.updateBookingStatus(bookingId as string, status as BookingStatus, userId as string);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Booking status updated successfully",
      data: result
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
  }
};

const cancelBooking = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user.id;
    const bookingId = req.params.id;
    
    const result = await BookingsService.cancelBooking(bookingId as string, userId as string);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Booking cancelled successfully",
      data: result
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message: error.message });
  }
};

export const BookingsController = {
  createBooking,
  getMyBookings,
  updateBookingStatus,
  cancelBooking
};