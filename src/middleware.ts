import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  
  // If the user agent is curl, wget, or HTTPie and they are hitting the root domain
  const isTerminalClient = userAgent.startsWith('curl/') || userAgent.startsWith('Wget/') || userAgent.startsWith('HTTPie/')
  
  if (isTerminalClient && request.nextUrl.pathname === '/') {
    // Rewrite to our dedicated CLI API route
    return NextResponse.rewrite(new URL('/api/cli', request.url))
  }

  return NextResponse.next()
}

// Only run this middleware on the root path
export const config = {
  matcher: '/',
}
