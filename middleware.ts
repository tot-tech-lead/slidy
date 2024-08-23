import {NextRequest, NextResponse} from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

let locales = ["en", "uk"];
let defaultLocale = "en";

function getLocale(request: NextRequest) {
    const acceptLang = request.headers.get("Accept-Language");
    if (!acceptLang) return defaultLocale;
    const headers = { "accept-language": acceptLang };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const {pathname} = request.nextUrl;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    console.log(pathnameHasLocale)
    if (pathnameHasLocale) return;


    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/',               // Match the home path
        '/authorization/:path*', // Match any path under /authorization
        '/tours/:path*',         // Match any path under /tours
        // Optional: only run on root (/) URL
        // '/'
    ],
};