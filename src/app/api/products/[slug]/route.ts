import { NextRequest } from "next/server";
import prisma from "@/lib/db";
import { handleApiError, successResponse, notFoundResponse } from "@/lib/api-utils";

interface RouteParams {
  params: { slug: string };
}

// GET /api/products/[slug] - Public: Get single product by slug
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug: params.slug,
        status: "active", // Only show active products
      },
      include: {
        category: { select: { id: true, name: true, slug: true } },
      },
    });

    if (!product) {
      return notFoundResponse("Product");
    }

    return successResponse(product);
  } catch (error) {
    return handleApiError(error);
  }
}


