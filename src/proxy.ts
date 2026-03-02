import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // 1. Get Token from cookies
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // 2. Define protected vs public paths
  const isAuth = pathname.startsWith("/auth");
  const protectedPaths = ["/dashboard"];
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));

  // Case A: User is not logged in but trying to access /dashboard
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // Case B: User is logged in but trying to access /auth
  console.log(token);
  console.log(isAuth);
  if (token && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"]
};
