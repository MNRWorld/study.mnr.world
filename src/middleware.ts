import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Don't run middleware on API routes, Next.js specific paths, or static files.
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Handle case-insensitivity redirect first
  if (pathname !== pathname.toLowerCase()) {
    const newUrl = new URL(request.url);
    newUrl.pathname = pathname.toLowerCase();
    return NextResponse.redirect(newUrl, 308); // 308 for permanent redirect
  }
  
  // Update Supabase session
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
