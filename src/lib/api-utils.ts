import { NextResponse } from "next/server";
import { ZodError } from "zod";

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleApiError(error: unknown): NextResponse {
  console.error("[API Error]:", error);

  // Zod validation errors
  if (error instanceof ZodError) {
    const formattedErrors: Record<string, string[]> = {};
    error.errors.forEach((err) => {
      const path = err.path.join(".");
      if (!formattedErrors[path]) {
        formattedErrors[path] = [];
      }
      formattedErrors[path].push(err.message);
    });

    return NextResponse.json(
      {
        error: "Validation Error",
        message: "Invalid request data",
        details: formattedErrors,
      },
      { status: 400 }
    );
  }

  // Custom API errors
  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        error: error.name,
        message: error.message,
        ...(error.errors && { details: error.errors }),
      },
      { status: error.statusCode }
    );
  }

  // Generic errors
  if (error instanceof Error) {
    // Don't expose internal error details in production
    const message =
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : error.message;

    return NextResponse.json(
      {
        error: "Internal Server Error",
        message,
      },
      { status: 500 }
    );
  }

  // Unknown errors
  return NextResponse.json(
    {
      error: "Internal Server Error",
      message: "An unexpected error occurred",
    },
    { status: 500 }
  );
}

export function successResponse<T>(data: T, status: number = 200): NextResponse {
  return NextResponse.json(data, { status });
}

export function createdResponse<T>(data: T): NextResponse {
  return NextResponse.json(data, { status: 201 });
}

export function noContentResponse(): NextResponse {
  return new NextResponse(null, { status: 204 });
}

// Common error responses
export function unauthorizedResponse(message: string = "Unauthorized"): NextResponse {
  return NextResponse.json(
    { error: "Unauthorized", message },
    { status: 401 }
  );
}

export function forbiddenResponse(message: string = "Forbidden"): NextResponse {
  return NextResponse.json(
    { error: "Forbidden", message },
    { status: 403 }
  );
}

export function notFoundResponse(resource: string = "Resource"): NextResponse {
  return NextResponse.json(
    { error: "Not Found", message: `${resource} not found` },
    { status: 404 }
  );
}

export function badRequestResponse(message: string): NextResponse {
  return NextResponse.json(
    { error: "Bad Request", message },
    { status: 400 }
  );
}


