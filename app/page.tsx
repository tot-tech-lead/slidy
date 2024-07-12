import PreviewPage from "@/app/ui/page-elements/home/previewPage/previewPage";
import WaitListForm from "@/app/ui/page-elements/home/waitList/wait-list";
import TeamSlider from "@/app/ui/page-elements/home/team/team";
import dynamic from "next/dynamic";

const DynamicAboutUs = dynamic(() => import("@/app/ui/page-elements/home/aboutUs/aboutUs"), {
    loading: () => <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Зачекайте</div>,
    ssr: false
})

const DynamicHowItWork = dynamic(() => import("@/app/ui/page-elements/home/howItWork/howItWork"), {
    loading: () => <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Зачекайте</div>,
    ssr: false
})

export default function Home() {
    return (
        <main>
            <PreviewPage/>
            <DynamicAboutUs/>
            <DynamicHowItWork />
            <WaitListForm />
            <TeamSlider />
            <DynamicContacts />
        </main>
    );
}
