import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // 1. Get Token from cookies
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // 2. Define protected vs public paths
  const isAuth = pathname.startsWith("/auth");
  const isDashboardPage = pathname.startsWith("/dashboard");

  // Case A: User is not logged in but trying to access /dashboard
  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  // Case B: User is logged in but trying to access /auth
  if (token && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
