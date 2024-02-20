import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

acceptLanguage.languages(languages);

export const config = {
  matcher: ["/((?!api|_next/static|_nextimage|assets|favicon.ico|sw.js).*)"],
};

export const middleware = (req: NextRequest) => {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(
      (req.cookies.get(cookieName) as RequestCookie).value,
    );

  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
  if (!lng) lng = fallbackLng;

  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next') &&
    !req.nextUrl.pathname.startsWith('/files') &&  // everything on public folder will start with this
    !req.nextUrl.pathname.startsWith('/favicon.ico')
  ) return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') as string);
    const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
};
