import { prisma } from "../../lib/prisma";
import { BlogsSearchableFields } from "./blogs.constant";
import { TBlogs } from "./blogs.interface";
import { Prisma } from "../../generated/prisma/client";

const createBlog = async (payload: TBlogs): Promise<any> => {
    // Generate slug from title
    const slug = payload.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const result = await prisma.blog.create({
        data: {
            ...payload,
            slug,
        },
    });
    return result;
};

const getAllBlogs = async (
    filters: any,
    options: any
): Promise<any> => {
    const { searchTerm, ...filtersData } = filters;
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = options;
    
    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);

    const whereConditions: Prisma.BlogWhereInput = {};

    // Dynamic Searching
    if (searchTerm) {
        whereConditions.OR = BlogsSearchableFields.map(field => ({
            [field]: {
                contains: searchTerm,
                mode: 'insensitive',
            },
        }));
    }

    // Dynamic Filters
    if (Object.keys(filtersData).length > 0) {
        whereConditions.AND = Object.keys(filtersData).map(key => ({
            [key]: {
                equals: (filtersData as any)[key],
            },
        }));
    }

    const result = await prisma.blog.findMany({
        where: whereConditions,
        skip,
        take,
        orderBy: { [sortBy]: sortOrder },
        include: {
            author: true
        }
    });

    const total = await prisma.blog.count({
        where: whereConditions
    });

    return {
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
        },
        data: result,
    };
};

const getBlogById = async (id: string): Promise<any | null> => {
    const result = await prisma.blog.findUnique({
        where: { id },
        include: { author: true }
    });
    return result;
};

const updateBlog = async (id: string, payload: Partial<TBlogs>): Promise<any | null> => {
    const result = await prisma.blog.update({
        where: { id },
        data: payload
    });
    return result;
};

const deleteBlog = async (id: string): Promise<any | null> => {
    const result = await prisma.blog.delete({
        where: { id }
    });
    return result;
};

export const BlogsService = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
};