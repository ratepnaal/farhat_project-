import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Only redirect the root path to Arabic
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/ar', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Only match the root path
    '/',
  ],
} 