import { NextRequest } from "next/server";
import prisma from "@/lib/db";
import { orderStatusSchema } from "@/lib/validations/order";
import {
  handleApiError,
  successResponse,
  notFoundResponse,
} from "@/lib/api-utils";

interface RouteParams {
  params: { id: string };
}

// GET /api/admin/orders/[id] - Get single order
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const order = await prisma.order.findUnique({
      where: { id: params.id },
      include: {
        user: { select: { id: true, name: true, email: true, phone: true } },
        orderItems: {
          include: {
            product: { select: { id: true, name: true, images: true, price: true } },
          },
        },
      },
    });

    if (!order) {
      return notFoundResponse("Order");
    }

    return successResponse(order);
  } catch (error) {
    return handleApiError(error);
  }
}

// PATCH /api/admin/orders/[id] - Update order status
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = orderStatusSchema.parse(body);

    // Check if order exists
    const existingOrder = await prisma.order.findUnique({
      where: { id: params.id },
    });

    if (!existingOrder) {
      return notFoundResponse("Order");
    }

    // Update order status
    const order = await prisma.order.update({
      where: { id: params.id },
      data: { status: validatedData.status },
      include: {
        user: { select: { id: true, name: true, email: true } },
        orderItems: {
          include: {
            product: { select: { id: true, name: true } },
          },
        },
      },
    });

    return successResponse(order);
  } catch (error) {
    return handleApiError(error);
  }
}

