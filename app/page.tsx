import WaitListForm from "@/app/ui/page-elements/home/waitList/wait-list";
import TeamSlider from "@/app/ui/page-elements/home/team/team";
import PreviewPageSkeleton from "@/app/ui/skeleton/preview-page";

import dynamic from "next/dynamic";

const DynamicAboutUs = dynamic(() => import("@/app/ui/page-elements/home/aboutUs/aboutUs"), {
    loading: () => <div
        style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Зачекайте</div>,
    ssr: false
})

const DynamicPreviewPage = dynamic(() => import("@/app/ui/page-elements/home/previewPage/previewPage"), {
    loading: () => <PreviewPageSkeleton />,
    ssr: true
})

const DynamicContacts = dynamic(() => import("@/app/ui/page-elements/home/contacts/contacts"), {
    loading: () => <div
        style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Зачекайте</div>,
    ssr: true
})

const DynamicHowItWork = dynamic(() => import("@/app/ui/page-elements/home/howItWork/howItWork"), {
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
