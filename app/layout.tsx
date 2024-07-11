import "./globals.css";

import type {Metadata} from "next";
import {nunitoSans} from "@/app/ui/fonts";
import Header from "@/app/ui/page-elements/header/header"
import Footer from "@/app/ui/page-elements/footer/footer"

import StoreProvider from "@/app/StoreProvider";
import {SpeedInsights} from "@vercel/speed-insights/next"

const description = "Ти новенький у місті і не знаєш чим  зайнятись? Вебсайт Сліди стане твоїм помічником при виборі екскурсовода або місцевого який допоможе тобі розвіятись. Окрім цього це можливість заробітку на знанні місцевості, адже платформа дозволяє будь-кому стати екскурсоводом. Гіди доступні у таких містах: Львів. Зараз записи на екскурсії проводяться у мобільному режимі. Сліди - найкарща платформа для пошуку екскурсоводів";

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <StoreProvider>
            <html lang="en">
            <body className={nunitoSans.className}>
            <Header/>
            {children}
            <Footer/>
            <SpeedInsights />
            </body>
            </html>
        </StoreProvider>
    );
}

export const metadata: Metadata = {
    metadataBase: new URL('https://slidy.space'),
    title: "Slidy",
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
