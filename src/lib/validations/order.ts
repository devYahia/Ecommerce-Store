import { z } from "zod";

export const orderItemSchema = z.object({
  productId: z.string().uuid("Invalid product ID"),
  quantity: z.number().int().positive("Quantity must be at least 1"),
  price: z.number().positive("Price must be positive"),
});

export const shippingAddressSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(10, "Invalid phone number").max(15, "Invalid phone number"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  governorate: z.string().min(1, "Governorate is required"),
  postalCode: z.string().optional(),
});

export const orderSchema = z.object({
  items: z.array(orderItemSchema).min(1, "Order must have at least one item"),
  shippingAddress: shippingAddressSchema,
  paymentMethod: z.enum(["cod", "card", "wallet"]).default("cod"),
  notes: z.string().optional(),
});

export const orderStatusSchema = z.object({
  status: z.enum(["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"]),
});

export type OrderInput = z.infer<typeof orderSchema>;
export type OrderStatusInput = z.infer<typeof orderStatusSchema>;


