import express from 'express';
import { BlogsController } from './blogs.controller';
import auth from '../../middlewares/auth';
import { Role } from '../../generated/prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidationSchema } from './blogs.validation';

const router = express.Router();

router.get('/', BlogsController.getAllBlogsController);

router.get('/:id', BlogsController.getBlogByIdController);

router.post(
    '/',
    auth(Role.ADMIN),
    validateRequest(blogValidationSchema.createBlogSchema),
    BlogsController.createBlogController
);

router.patch(
    ('/:id'),
    auth(Role.ADMIN),
    validateRequest(blogValidationSchema.updateBlogSchema),
    BlogsController.updateBlogController
);

router.delete(
    '/:id',
    auth(Role.ADMIN),
    BlogsController.deleteBlogController
);

export const BlogsRoutes = router;
