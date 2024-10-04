import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public and private routes
  const isPublicPath = path === "/login";
  const isPrivatePath =
    path.startsWith("/admin") || path === "/add-note" || path === "/add-user";

  // Get the token from cookies
  const token = request.cookies.get("token")?.value || "";
// console.log(token)
  // Redirect unauthenticated users trying to access private routes
  if (!token && isPrivatePath) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Redirect authenticated users trying to access the login page
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL("/admin", request.nextUrl));
  }

  // Allow the request if it's to a public page or if user is authenticated for private routes
  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: ["/admin/:path*", "/add-note", "/add-user", "/login"],
};
