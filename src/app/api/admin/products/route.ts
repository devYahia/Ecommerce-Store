import { NextRequest } from "next/server";
import prisma from "@/lib/db";
import { productSchema } from "@/lib/validations/product";
import {
  handleApiError,
  successResponse,
  createdResponse,
} from "@/lib/api-utils";

// GET /api/admin/products - List all products with pagination
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const categoryId = searchParams.get("categoryId");
    const status = searchParams.get("status");

    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { sku: { contains: search, mode: "insensitive" } },
      ];
    }

    if (categoryId) {
      where.categoryId = categoryId;
    }

    if (status) {
      where.status = status;
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        include: {
          category: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: "desc" },
      }),
      prisma.product.count({ where }),
    ]);

    return successResponse({
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return handleApiError(error);
  }
}

// POST /api/admin/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = productSchema.parse(body);

    // Check if slug is unique
    const existingProduct = await prisma.product.findUnique({
      where: { slug: validatedData.slug },
    });

    if (existingProduct) {
      return handleApiError({
        name: "ValidationError",
        message: "A product with this slug already exists",
        statusCode: 400,
      });
    }

    // Create product
    const product = await prisma.product.create({
      data: validatedData,
      include: {
        category: { select: { id: true, name: true } },
      },
    });

    return createdResponse(product);
  } catch (error) {
    return handleApiError(error);
  }
}


