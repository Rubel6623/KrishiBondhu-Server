import express from 'express';
import { BlogsController } from './blogs.controller';
import auth, { UserRole } from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { blogValidationSchema } from './blogs.validation';

const router = express.Router();

router.get(
    "/",
    BlogsController.getAllBlogsController
);

router.get(
    "/:id",
    BlogsController.getBlogByIdController
);

router.get(
    "/slug/:slug",
    BlogsController.getBlogBySlugController
);

router.post(
    '/',
    auth(UserRole.ADMIN),
    validateRequest(blogValidationSchema.createBlogSchema),
    BlogsController.createBlogController
);

router.patch(
    '/:id',
    auth(UserRole.ADMIN),
    validateRequest(blogValidationSchema.updateBlogSchema),
    BlogsController.updateBlogController
);

router.delete(
    '/:id',
    auth(UserRole.ADMIN),
    BlogsController.deleteBlogController
);

export const BlogsRoutes = router;
