import { NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';

import i18n from './i18nConfig';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname === '/admin' || pathname.startsWith('/admin/'))
    return NextResponse.next();

  return i18nRouter(request, i18n); //detects user language from the browser and redirects to this language
}

// applies this middleware only to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
