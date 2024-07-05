import "./globals.css";

import type {Metadata} from "next";
import {nunitoSans} from "@/app/ui/fonts";
import Header from "@/app/ui/header/header"

import StoreProvider from "@/app/StoreProvider";


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
            <footer></footer>
            </body>
            </html>
        </StoreProvider>
    );
}

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: "Slidy",
    description: description,
    openGraph: {
        type: "website",
        title: "Slidy",
        description: description,
        images: "/opengraph-image.png",
        locale: "uk_UA"
    },
    twitter: {
        domain: "slidy.space",
        title: "Slidy",
        description: description,
        card: "summary_large_image",
        images: "/twitter-image.png",
        locale: "uk_UA"
    }
};
