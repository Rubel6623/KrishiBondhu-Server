import { prisma } from "../../lib/prisma";
import { BlogsSearchableFields } from "./blogs.constant";
import { TBlogs } from "./blogs.interface";
import { Prisma } from "../../generated/prisma/client";
import { cacheGet, cacheSet, cacheDel, cacheFlushPattern } from "../../utils/cache";
import logger from "../../utils/logger";

const CACHE_TTL = 300; // 5 minutes — blogs don't change frequently

const createBlog = async (payload: TBlogs): Promise<any> => {
    const slug = payload.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const result = await prisma.blog.create({ data: { ...payload, slug } });
    cacheFlushPattern('blogs:');
    logger.info(`[Blog] Created: "${result.title}" (slug: ${result.slug})`);
    return result;
};

const getAllBlogs = async (filters: any, options: any): Promise<any> => {
    const { searchTerm, ...filtersData } = filters;
    const { page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc' } = options;

    // Cache clean/default queries only
    const isDefaultQuery = !searchTerm && Object.keys(filtersData).length === 0 && Number(page) === 1;
    const cacheKey = `blogs:all:${sortBy}:${sortOrder}:p${page}:l${limit}`;

    if (isDefaultQuery) {
        const cached = cacheGet<any>(cacheKey);
        if (cached) {
            logger.info(`[Cache] HIT ${cacheKey}`);
            return cached;
        }
    }

    const skip = (Number(page) - 1) * Number(limit);
    const take = Number(limit);
    const whereConditions: Prisma.BlogWhereInput = {};

    if (searchTerm) {
        whereConditions.OR = BlogsSearchableFields.map(field => ({
            [field]: { contains: searchTerm, mode: 'insensitive' as Prisma.QueryMode },
        }));
    }

    if (Object.keys(filtersData).length > 0) {
        whereConditions.AND = Object.keys(filtersData).map(key => ({
            [key]: { equals: (filtersData as any)[key] },
        }));
    }

    const [result, total] = await Promise.all([
        prisma.blog.findMany({
            where: whereConditions,
            skip,
            take,
            orderBy: { [sortBy]: sortOrder },
            include: { author: true },
        }),
        prisma.blog.count({ where: whereConditions }),
    ]);

    const response = { meta: { page: Number(page), limit: Number(limit), total }, data: result };

    if (isDefaultQuery) cacheSet(cacheKey, response, CACHE_TTL);
    return response;
};

const getBlogById = async (id: string): Promise<any | null> => {
    const cacheKey = `blogs:id:${id}`;
    const cached = cacheGet<any>(cacheKey);
    if (cached) { logger.info(`[Cache] HIT ${cacheKey}`); return cached; }

    const result = await prisma.blog.findUnique({ where: { id }, include: { author: true, provider: true } });
    if (result) cacheSet(cacheKey, result, CACHE_TTL);
    return result;
};

const getBlogBySlug = async (slug: string): Promise<any | null> => {
    const cacheKey = `blogs:slug:${slug}`;
    const cached = cacheGet<any>(cacheKey);
    if (cached) { logger.info(`[Cache] HIT ${cacheKey}`); return cached; }

    const result = await prisma.blog.findUnique({ where: { slug }, include: { author: true, provider: true } });
    if (result) cacheSet(cacheKey, result, CACHE_TTL);
    return result;
};

const updateBlog = async (id: string, payload: Partial<TBlogs>): Promise<any | null> => {
    const result = await prisma.blog.update({ where: { id }, data: payload });
    cacheFlushPattern('blogs:');
    logger.info(`[Blog] Updated: ${id}`);
    return result;
};

const deleteBlog = async (id: string): Promise<any | null> => {
    const result = await prisma.blog.delete({ where: { id } });
    cacheFlushPattern('blogs:');
    logger.info(`[Blog] Deleted: ${id}`);
    return result;
};

export const BlogsService = {
    createBlog,
    getAllBlogs,
    getBlogById,
    getBlogBySlug,
    updateBlog,
    deleteBlog,
};