import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { EquipmentRoutes } from '../modules/Equipment/equipment.route';
import { UserRoutes } from '../modules/User/user.route';
import { BookingsRoutes } from '../modules/Bookings/bookings.route';
import { BlogsRoutes } from '../modules/Blogs/blogs.route';
import { ProvidersRoutes } from '../modules/Providers/providers.route';
import { ReviewsRoutes } from '../modules/Reviews/reviews.route';
import { NotificationsRoutes } from '../modules/Notifications/notifications.route';
import { AIRoutes } from '../modules/AI/aI.route';
import { AnalyticsRoutes } from '../modules/Analytics/analytics.route';
import { CategoryRoutes } from '../modules/Category/category.route';

const router = Router();

const moduleRoutes: { path: string; route: any }[] = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/equipment',
    route: EquipmentRoutes,
  },
  {
    path: '/bookings',
    route: BookingsRoutes,
  },
  {
    path: '/blogs',
    route: BlogsRoutes,
  },
  {
    path: '/providers',
    route: ProvidersRoutes,
  },
  {
    path: '/reviews',
    route: ReviewsRoutes,
  },
  {
    path: '/notifications',
    route: NotificationsRoutes,
  },
  {
    path: '/ai',
    route: AIRoutes,
  },
  {
    path: '/analytics',
    route: AnalyticsRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
