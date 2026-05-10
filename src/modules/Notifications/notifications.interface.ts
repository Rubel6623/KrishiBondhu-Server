export interface INotification {
  id: string;
  userId: string;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export interface ICreateNotificationInput {
  userId?: string;
  title: string;
  message: string;
  providerId?: string;
  specialistId?: string;
  equipmentId?: string;
  appointmentId?: string;
  bookingId?: string;
  reviewId?: string;
  aiQueryId?: string;
  blogId?: string;
  type: 'BOOKING' | 'APPOINTMENT' | 'AI' | 'BLOG' | 'SYSTEM' | 'REVIEW';
}