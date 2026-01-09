import { NextRequest } from "next/server";
import prisma from "@/lib/db";
import { handleApiError, successResponse } from "@/lib/api-utils";

// GET /api/categories - Public: List all categories
export async function GET(request: NextRequest) {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        image: true,
        _count: {
          select: { products: true },
        },
      },
      orderBy: { name: "asc" },
    });

    return successResponse(categories);
  } catch (error) {
    return handleApiError(error);
  }
}


