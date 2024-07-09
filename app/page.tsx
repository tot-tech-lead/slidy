import PreviewPage from "@/app/ui/home/previewPage/previewPage";
import HowItWork from "@/app/ui/home/howItWork/howItWork";
import WaitListForm from "@/app/ui/home/waitList/wait-list";
import dynamic from "next/dynamic";

const DynamicAboutUs = dynamic(() => import("@/app/ui/home/aboutUs/aboutUs"), {
    loading: () => <div style={{height: "100vh"}}></div>,
    ssr: false
})

export default function Home() {
    return (
        <main>
            <PreviewPage/>
            <DynamicAboutUs/>
            <HowItWork />
            <WaitListForm />
        </main>
    );
}
