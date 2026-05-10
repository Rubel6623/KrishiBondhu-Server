import { Router } from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { AppointmentController } from "./appointments.controller";

const router = Router();

router.post("/", auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.ADMIN), AppointmentController.createAppointment);
router.get("/my-appointments", auth(UserRole.FARMER, UserRole.PROVIDER, UserRole.VETERINARIAN), AppointmentController.getMyAppointments);
router.patch("/:id/status", auth(UserRole.VETERINARIAN), AppointmentController.updateAppointmentStatus);

export const AppointmentRoutes = router;
