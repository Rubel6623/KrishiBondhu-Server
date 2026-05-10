import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AppointmentService } from "./appointments.service";
import { BookingStatus } from "../../generated/prisma";

const createAppointment = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const result = await AppointmentService.createAppointment(userId, req.body);
  
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Appointment booked successfully",
    data: result
  });
});

const getMyAppointments = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const role = (req as any).user.role;
  const result = await AppointmentService.getMyAppointments(userId, role);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Appointments retrieved successfully",
    data: result
  });
});

const updateAppointmentStatus = catchAsync(async (req: Request, res: Response) => {
  const userId = (req as any).user.id;
  const { id } = req.params;
  const status = req.body.status as BookingStatus;
  
  const result = await AppointmentService.updateAppointmentStatus(id, status, userId);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Appointment ${status.toLowerCase()} successfully`,
    data: result
  });
});

export const AppointmentController = {
  createAppointment,
  getMyAppointments,
  updateAppointmentStatus
};
