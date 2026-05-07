import { Router } from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { EquipmentRoutes } from '../modules/Equipment/equipment.route';
import { UserRoutes } from '../modules/User/user.route';

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;


