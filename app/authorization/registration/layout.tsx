import {Metadata} from "next";

export default function RegisterLayout({children}: Readonly<{
    children: React.ReactNode
}>) {

    return (
        <>
            {children}
        </>
    )
}

export const metadata: Metadata = {
    title: "Реєстрація"
}