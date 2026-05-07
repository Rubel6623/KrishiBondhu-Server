import { UserRole } from "../../middlewares/auth";

export const BOOKING_STATUS = {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
} as const;

export const BOOKING_FILTERABLE_FIELDS = ['status', 'farmerId', 'equipmentId'];
export const BOOKING_ROLE_ACCESS = {
  [UserRole.FARMER]: ['farmerId'],
  [UserRole.PROVIDER]: ['providerId', 'equipment.providerId'],
  [UserRole.ADMIN]: ['farmerId', 'providerId'],
};