import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for static files and API routes
  matcher: [
    // Match all pathnames except for:
    // - API routes (/api)
    // - Static files (/static, /_next, etc.)
    // - Media and assets (favicon.ico, sitemap.xml, robots.txt, preview/)
    "/((?!api|_next|_vercel|.*\\..*|preview).*)",
    
    // However, do run middleware on root path
    "/"
  ]
};
