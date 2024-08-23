import type {Metadata} from "next";
import Header from "@/app/[lang]/ui/header/header"
import Footer from "@/app/[lang]/ui/footer/footer"
import MobileMenu from "@/app/[lang]/ui/mobile-menu/mobile-menu";

import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/react"
import connectToMongoDB from "@/app/lib/mongodb";
import {getDictionary} from "@/app/[lang]/dictionaries";
import {useTranslation} from "@/app/lib/hooks/useTranslation";


const description = "Ти новенький у місті і не знаєш чим  зайнятись? Вебсайт Сліди стане твоїм помічником при виборі екскурсовода або місцевого який допоможе тобі розвіятись. Окрім цього це можливість заробітку на знанні місцевості, адже платформа дозволяє будь-кому стати екскурсоводом. Гіди доступні у таких містах: Львів. Зараз записи на екскурсії проводяться у мобільному режимі. Сліди - найкарща платформа для пошуку екскурсоводів";

export default async function RootLayout(
    {
        children,
        params
    }: Readonly<{
        children: React.ReactNode;
        params: {
            lang: string
        }
    }>
) {
    await connectToMongoDB();

    const {lang} = params;
    const t = await getDictionary(lang)

    return (
        <>
            <Header t={t}/>
            <MobileMenu/>
            {children}
            <Footer/>
            <SpeedInsights/>
            <Analytics/>
        </>
    );
}

export const metadata: Metadata = {
    metadataBase: new URL('https://slidy.space'),
    title: {
        template: '%s | Slidy',
        default: 'Slidy',
    },
    description: description,
    openGraph: {
        type: "website",
        title: "Slidy",
        description: description,
        images: "/assets/opengraph-image.png",
        locale: "uk_UA",
        url: "https://slidy.space",
        siteName: "Slidy"
    },
    twitter: {
        title: "Slidy",
        description: description,
        card: "summary_large_image",
        images: "/assets/twitter-image.png",
    }
};


