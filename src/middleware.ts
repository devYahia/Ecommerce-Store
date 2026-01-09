import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This is a placeholder for actual authentication logic
// In production, integrate with NextAuth.js or similar
async function verifySession(request: NextRequest): Promise<{ isValid: boolean; isAdmin: boolean }> {
  // Check for session cookie or authorization header
  const sessionCookie = request.cookies.get("session");
  const authHeader = request.headers.get("authorization");

  // TODO: Implement actual session verification with database/JWT
  // For now, return false to block unauthorized access
  // This will be replaced with real auth logic when NextAuth is set up
  
  if (!sessionCookie && !authHeader) {
    return { isValid: false, isAdmin: false };
  }

  // Placeholder: In production, verify the token/session here
  // const session = await verifyToken(sessionCookie?.value || authHeader);
  // return { isValid: !!session, isAdmin: session?.role === "admin" };

  return { isValid: false, isAdmin: false };
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin API routes
  if (pathname.startsWith("/api/admin")) {
    const { isValid, isAdmin } = await verifySession(request);

    if (!isValid) {
      return NextResponse.json(
        { error: "Unauthorized", message: "Authentication required" },
        { status: 401 }
      );
    }

    if (!isAdmin) {
      return NextResponse.json(
        { error: "Forbidden", message: "Admin access required" },
        { status: 403 }
      );
    }
  }

  // Protect admin pages (redirect to login)
  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    // TODO: Check session and redirect to login if not authenticated
    // For now, allow access during development
    // In production, uncomment the following:
    // const { isValid, isAdmin } = await verifySession(request);
    // if (!isValid || !isAdmin) {
    //   return NextResponse.redirect(new URL("/admin/login", request.url));
    // }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match admin API routes
    "/api/admin/:path*",
    // Match admin pages (except login)
    "/admin/:path*",
  ],
};

