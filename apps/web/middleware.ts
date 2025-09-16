// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/api/v1/(.*)', '/pricing(.*)'])

// export default clerkMiddleware(async (auth, req) => {
//   if (isProtectedRoute(req)) {
//     await auth.protect()
//   }
// })

// export const config = {
//   matcher: [
//     // Run Clerk on all routes except Next.js internals/static files
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//     '/sso-callback',
//   ],
// }

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// let requestCount = 0;
// export function middleware(request: NextRequest) {
  
//   requestCount++;
//   console.log("number of requests is " + requestCount);
//   return  NextResponse.next()
// }




// middleware.ts (combined version)
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import PrismaClient from '@repo/db/client';
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/api/v1/(.*)', '/pricing(.*)']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  
  // Clerk authentication for protected routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
  const path = req.nextUrl.pathname
  console.log(path)
  const {userId} = await auth();
  
  if (!userId && path.startsWith("/api/v1")) {
    return NextResponse.redirect(new URL('/', req.url))
  } 

  if (userId && path.startsWith("/api/v1")) {
    console.log(req.nextUrl.pathname)
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    // Run Clerk on all routes except Next.js internals/static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/sso-callback',
  ],
};