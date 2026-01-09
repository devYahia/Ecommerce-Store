import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required").max(200, "Name too long"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Invalid slug format"),
  description: z.string().optional(),
  price: z.number().positive("Price must be positive"),
  compareAtPrice: z.number().positive().optional().nullable(),
  categoryId: z.string().uuid("Invalid category ID"),
  brandId: z.string().uuid("Invalid brand ID").optional().nullable(),
  images: z.array(z.string().url("Invalid image URL")).default([]),
  stock: z.number().int().min(0, "Stock cannot be negative").default(0),
  sku: z.string().optional(),
  status: z.enum(["draft", "active", "archived"]).default("draft"),
});

export const productUpdateSchema = productSchema.partial();

export type ProductInput = z.infer<typeof productSchema>;
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>;

