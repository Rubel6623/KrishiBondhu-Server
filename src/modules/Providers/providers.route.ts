import express from 'express';
import { ProvidersController } from './providers.controller';

const router = express.Router();

router.get('/', ProvidersController.getAllProviders);
router.get('/:id', ProvidersController.getProviderById);

export const ProvidersRoutes = router;
