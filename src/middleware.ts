import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/login"];
const PRIVATE_PATHS = ["/admin", "/add-note", "/add-user"];
const secret = process.env.TOKEN_SECRET;
export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = await getToken({ req: request, secret  });
  // const session =   ();
  // console.log("The server side session is",session);
  const isPublicPath = PUBLIC_PATHS.includes(path);
  const isPrivatePath = PRIVATE_PATHS.some((privatePath) =>
    path.startsWith(privatePath)
  );

  // Retrieve the token from cookies
  // const token = request.cookies.get("token")?.value || "";
  



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
