import Login from "@/app/[lang]/authorization/login/content";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Page({params}: {params: {
    lang: string
}}) {
    let {lang} = params
    let t = await getDictionary(lang);

    return (
        <>
            <Login t={t.authorization} />
        </>
    )
}