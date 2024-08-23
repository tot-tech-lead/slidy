import "./globals.css";

import type {Metadata} from "next";
import {nunitoSans} from "@/app/[lang]/ui/fonts";

const description = "Are you new in town and don't know what to do? The Slidy website will be your assistant in choosing a guide or a local who will help you unwind. Additionally, it's an opportunity to earn money by sharing your knowledge of the area, as the platform allows anyone to become a guide. Guides are available in cities like Lviv. Currently, bookings for excursions are being made in mobile mode. Slidy is the best platform for finding guides.";

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    return (
        <html lang="en">
        <body className={nunitoSans.className}>
        {children}
        </body>
        </html>
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


