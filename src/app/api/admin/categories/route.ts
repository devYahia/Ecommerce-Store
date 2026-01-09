import { NextRequest } from "next/server";
import prisma from "@/lib/db";
import { categorySchema } from "@/lib/validations/category";
import {
  handleApiError,
  successResponse,
  createdResponse,
} from "@/lib/api-utils";

// GET /api/admin/categories - List all categories
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeProducts = searchParams.get("includeProducts") === "true";

    const categories = await prisma.category.findMany({
      include: includeProducts
        ? { products: { select: { id: true, name: true } } }
        : undefined,
      orderBy: { name: "asc" },
    });

    return successResponse(categories);
  } catch (error) {
    return handleApiError(error);
  }
}

// POST /api/admin/categories - Create a new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = categorySchema.parse(body);

    // Check if slug is unique
    const existingCategory = await prisma.category.findUnique({
      where: { slug: validatedData.slug },
    });

    if (existingCategory) {
      return handleApiError({
        name: "ValidationError",
        message: "A category with this slug already exists",
        statusCode: 400,
      });
    }

    // Create category
    const category = await prisma.category.create({
      data: validatedData,
    });

    return createdResponse(category);
  } catch (error) {
    return handleApiError(error);
  }
}

