import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Only redirect the root path to English
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Only match the root path
    '/',
  ],
} 