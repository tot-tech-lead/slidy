import WaitListForm from "./waitList/wait-list";
import TeamSlider from "./team/team";
import PreviewPageSkeleton from "@/app/ui/skeleton/preview-page";

import dynamic from "next/dynamic";

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


export default function Home() {
    return (
        <main>
            <DynamicPreviewPage/>
            <DynamicAboutUs/>
            <DynamicHowItWork/>
            <WaitListForm/>
            <TeamSlider/>
            <DynamicContacts/>
        </main>
    );
}
