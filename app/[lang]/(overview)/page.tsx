import WaitListForm from "./waitList/wait-list";
import TeamSlider from "./team/team";
import PreviewPageSkeleton from "@/app/[lang]/ui/skeleton/preview-page";

import dynamic from "next/dynamic";
import {Metadata} from "next";
import {getDictionary} from "@/app/[lang]/dictionaries";

const DynamicAboutUs = dynamic(() => import("./aboutUs/aboutUs"), {
    loading: () => <div
        style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Зачекайте</div>,
    ssr: false
})

const DynamicPreviewPage = dynamic(() => import("./previewPage/previewPage"), {
    loading: () => <PreviewPageSkeleton />,
    ssr: true
})

const DynamicContacts = dynamic(() => import("./contacts/contacts"), {
    loading: () => <div
        style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Зачекайте</div>,
    ssr: true
})

const DynamicHowItWork = dynamic(() => import("./howItWork/howItWork"), {
    loading: () => <div
        style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Зачекайте</div>,
    ssr: true
})


export default async function Home({ params: { lang } }: { params: { lang: string } }) {
    const t = await getDictionary(lang);

    console.log(t)
    console.log("OKKKKK")

    return (
        <main>
            <DynamicPreviewPage t={t.home}/>
            <DynamicAboutUs t={t.home}/>
            <DynamicHowItWork t={t.home}/>
            <WaitListForm/>
            <TeamSlider/>
            <DynamicContacts/>
        </main>
    );
}

export const metadata: Metadata = {
    title: "Домашня"
}