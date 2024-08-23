import styles from "./styles.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import {nunito} from "@/app/[lang]/ui/fonts";

// import {useEffect, useState} from "react";
// import ViewTourInfo from "../ViewTourInfo/ViewTourInfo";
// import ViewTourPlaces from "../ViewTourPlaces/ViewTourPlaces";
// import ViewTourFeedbacks from "../ViewTourFeedback/ViewTourFeedbacks";
import Info from "./components/info/info"
import {getTour} from "@/app/lib/data/tours";
import clsx from "clsx";
import Places from "@/app/[lang]/tours/view/[id]/components/places/place";

export default async function Page({params}: { params: { id: string } }) {
    const {id} = params;

    const {status, data, message} = await getTour(id)

    return (
        <div className={styles.tourPage}>
            {
                status === 200 ? data && <>
                    <h2 className={clsx(prestyle.textH2, nunito.className, styles.headline)}>{data.name}</h2>
                    <Info
                        {...{...data}}
                        guideProfile={data.guide.profile}
                    />
                    <Places images={data.images}
                            locations={data.locations}
                    />
                    {/*<ViewTourPlaces {...data} />*/}
                    {/*<ViewTourFeedbacks {...data} />*/}
                    <a href={data.guide?.contactLink}
                       className={prestyle.buttonOutlined}
                       type='button'
                       target="_blank"
                    >
                        Зв’язатись із організатором
                    </a>
                </> : "Помилка"
            }

        </div>
    );
}