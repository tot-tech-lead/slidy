import {getDictionary} from "@/app/[lang]/dictionaries";
import Register from "./content";

export default async function Page({params}: {params: {
        lang: string
    }}) {
    let {lang} = params
    let t = await getDictionary(lang);

    return (
        <>
            <Register t={t.authorization}/>
        </>
    )
}
