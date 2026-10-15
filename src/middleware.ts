import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // 1. Redirect www to non-www to fix canonical_elsewhere SEO issue
  if (url.hostname === 'www.ghulam-mustafa.com') {
    url.hostname = 'ghulam-mustafa.com'
    return NextResponse.redirect(url, 301)
  }

  // 2. Subdomain routing for agency.ghulam-mustafa.com
  const hostname = request.headers.get('host') || url.hostname || ''
  const isAgencySubdomain = hostname.startsWith('agency.') || hostname === 'agency.ghulam-mustafa.com'

  if (isAgencySubdomain) {
    if (url.pathname === '/') {
      return NextResponse.rewrite(new URL('/agency', request.url))
    }
    if (!url.pathname.startsWith('/agency')) {
      return NextResponse.rewrite(new URL(`/agency${url.pathname}`, request.url))
    }
  }

  const userAgent = request.headers.get('user-agent') || ''
  
  // 3. If the user agent is curl, wget, or HTTPie and they are hitting the root domain
  const isTerminalClient = userAgent.startsWith('curl/') || userAgent.startsWith('Wget/') || userAgent.startsWith('HTTPie/')
  
  if (isTerminalClient && request.nextUrl.pathname === '/') {
    // Rewrite to our dedicated CLI API route
    return NextResponse.rewrite(new URL('/api/cli', request.url))
  }

  return NextResponse.next()
}

// Run middleware on all paths except static assets
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets|.*\\.png|.*\\.jpg).*)'],
}
