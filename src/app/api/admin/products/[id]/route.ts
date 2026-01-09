import { NextRequest } from "next/server";
import prisma from "@/lib/db";
import { productUpdateSchema } from "@/lib/validations/product";
import {
  handleApiError,
  successResponse,
  notFoundResponse,
  noContentResponse,
} from "@/lib/api-utils";

interface RouteParams {
  params: { id: string };
}

// GET /api/admin/products/[id] - Get single product
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.id },
      include: {
        category: { select: { id: true, name: true } },
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

// PUT /api/admin/products/[id] - Update product
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = productUpdateSchema.parse(body);

    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: params.id },
    });

    if (!existingProduct) {
      return notFoundResponse("Product");
    }

    // If slug is being updated, check uniqueness
    if (validatedData.slug && validatedData.slug !== existingProduct.slug) {
      const slugExists = await prisma.product.findUnique({
        where: { slug: validatedData.slug },
      });

      if (slugExists) {
        return handleApiError({
          name: "ValidationError",
          message: "A product with this slug already exists",
          statusCode: 400,
        });
      }
    }

    // Update product
    const product = await prisma.product.update({
      where: { id: params.id },
      data: validatedData,
      include: {
        category: { select: { id: true, name: true } },
      },
    });

    return successResponse(product);
  } catch (error) {
    return handleApiError(error);
  }
}

// DELETE /api/admin/products/[id] - Delete product
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    // Check if product exists
    const existingProduct = await prisma.product.findUnique({
      where: { id: params.id },
    });

    if (!existingProduct) {
      return notFoundResponse("Product");
    }

    // Delete product
    await prisma.product.delete({
      where: { id: params.id },
    });

    return noContentResponse();
  } catch (error) {
    return handleApiError(error);
  }
}


