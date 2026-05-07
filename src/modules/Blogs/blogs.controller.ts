import { Request, Response } from "express";
import { BlogsService } from "./blogs.service";
import { BlogsFilterableFields, BlogsPaginationFields } from "./blogs.constant";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import pick from "../../utils/pick";
import httpStatus from "http-status";
const createBlogController = catchAsync(async (req: Request, res: Response) => {
    // Injecting authorId from auth user if available
    const authorId = (req as any).user?.id || req.body.authorId;
    const result = await BlogsService.createBlog({ ...req.body, authorId });

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Blog created successfully",
        data: result,
    });
});

const getAllBlogsController = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, BlogsFilterableFields);
    const options = pick(req.query, BlogsPaginationFields);
    const result = await BlogsService.getAllBlogs(filters, options);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blogs fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});

const getBlogByIdController = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogsService.getBlogById(id as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result,
    });
});

const getBlogBySlugController = catchAsync(async (req: Request, res: Response) => {
    const { slug } = req.params;
    const result = await BlogsService.getBlogBySlug(slug as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog fetched successfully",
        data: result,
    });
});


const updateBlogController = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogsService.updateBlog(id as string, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog updated successfully",
        data: result,
    });
});

const deleteBlogController = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await BlogsService.deleteBlog(id as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Blog deleted successfully",
        data: result,
    });
});

export const BlogsController = {
    createBlogController,
    getAllBlogsController,
    getBlogByIdController,
    getBlogBySlugController,
    updateBlogController,
    deleteBlogController,
};