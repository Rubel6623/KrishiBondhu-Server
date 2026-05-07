import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  content: z.string({ required_error: "Content is required" }),
  authorName: z.string({ required_error: "Author name is required" }),
  authorEmail: z.string({ required_error: "Author email is required" }),
  image: z.string({ required_error: "Image URL is required" }),
  category: z.enum(["RICE", "WHEAT", "POTATO", "VEGETABLE", "FRUIT", "SOIL", "FERTILIZER", "OTHER"]),
  status: z.enum(["DRAFT", "PUBLISHED"]),
});

export const updateBlogSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  authorName: z.string().optional(),
  authorEmail: z.string().optional(),
  image: z.string().optional(),
  category: z.enum(["RICE", "WHEAT", "POTATO", "VEGETABLE", "FRUIT", "SOIL", "FERTILIZER", "OTHER"]).optional(),
  status: z.enum(["DRAFT", "PUBLISHED"]).optional(),
});

export const blogValidationSchema = {
  createBlogSchema,
  updateBlogSchema,
};