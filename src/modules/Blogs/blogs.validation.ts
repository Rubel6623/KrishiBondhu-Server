import { z } from "zod";

export const createBlogSchema = z.object({
  body: z.object({
    title: z.string({ message: "Title is required" }),
    content: z.string({ message: "Content is required" }),
    authorName: z.string({ message: "Author name is required" }),
    authorEmail: z.string({ message: "Author email is required" }),
    image: z.string({ message: "Image URL is required" }),
    category: z.enum(["RICE", "WHEAT", "POTATO", "VEGETABLE", "FRUIT", "SOIL", "FERTILIZER", "OTHER"]),
    status: z.enum(["DRAFT", "PUBLISHED"]),
  })
});

export const updateBlogSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    authorName: z.string().optional(),
    authorEmail: z.string().optional(),
    image: z.string().optional(),
    category: z.enum(["RICE", "WHEAT", "POTATO", "VEGETABLE", "FRUIT", "SOIL", "FERTILIZER", "OTHER"]).optional(),
    status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
  })
});

export const blogValidationSchema = {
  createBlogSchema,
  updateBlogSchema,
};
