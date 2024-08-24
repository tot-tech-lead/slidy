import {NextRequest, NextResponse} from "next/server";
import Negotiator from "negotiator";
import {match} from "@formatjs/intl-localematcher";

const locales = ["en", "uk"];
const defaultLocale = "en";

function getLocale(request: NextRequest) {
    const cookieLocale = request.cookies.get("lang")?.value;
    if (cookieLocale) return cookieLocale;

    const acceptLang = request.headers.get("Accept-Language");
    if (!acceptLang) return defaultLocale;

    const headers = {"accept-language": acceptLang};
    const languages = new Negotiator({headers}).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const {pathname} = request.nextUrl;

    if (pathname.includes("_next")) return

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        let locale = locales.find(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

        const res = NextResponse.next();

        if (locale) {
            res.cookies.set("lang", locale, {path: '/'});
        }

        return res;
    }

    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    const res = NextResponse.redirect(request.nextUrl);
    res.cookies.set("lang", locale, {path: '/'});
    return res;
}

export const config = {
    matcher: [
        '/',
        '/authorization/:path*',
        '/tours/:path*',
        '/((?!_next).*)',
    ],
};
