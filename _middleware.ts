// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Redirect root to appropriate page
    if (req.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Allow access to auth pages without token
        if (
          req.nextUrl.pathname.startsWith("/login") ||
          req.nextUrl.pathname.startsWith("/mfa") ||
          req.nextUrl.pathname.startsWith("/forgot-password")
        ) {
          return true;
        }
        // Require token for dashboard
        return !!token;
      },
    },
  },
);

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
