import {Metadata} from "next";

export default function LoginLayout({children}: Readonly<{
    children: React.ReactNode
}>) {

    return (
        <>
            {children}
        </>
    )
}

export const metadata: Metadata = {
    title: "Вхід"
}