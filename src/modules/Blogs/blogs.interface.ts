export type TBlogs = {
    id?: string;
    title: string;
    slug?: string;
    content: string;
    excerpt?: string;
    image?: string;
    category: "RICE" | "WHEAT" | "POTATO" | "VEGETABLE" | "FRUIT" | "SOIL" | "FERTILIZER" | "OTHER";
    status: "DRAFT" | "PUBLISHED";
    authorId: string;
    authorName: string;
    authorEmail: string;
    createdAt?: Date;
    updatedAt?: Date;
};