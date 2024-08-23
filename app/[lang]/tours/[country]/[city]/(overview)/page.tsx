import styles from "../tours.module.css"
import React, {Suspense} from "react";

import Tours from "@/app/[lang]/tours/[country]/[city]/(overview)/tours";
import {getTours, getPaginationArray} from "@/app/lib/data/tours";
import ToursPagination from "@/app/[lang]/tours/[country]/[city]/(overview)/pagination";

export default async function Page(
    {params, searchParams}:
        {
            params: { country: string, city: string },
            searchParams: {
                category: string;
                duration: string;
                countOfPeople: string;
                price: string;
                page: string;
            };
        }
) {
    let {country, city} = params;
    let {
        category,
        duration,
        countOfPeople,
        price,
        page,
    } = searchParams

    let [data, pages] = await Promise.all([
        getTours({
            category, duration, countOfPeople, price, page, country, city
        }),
        getPaginationArray({
            category, duration, countOfPeople, price, page, country, city
        })
    ])

    return (
        <>
            <div className={styles.cardsGroup}>
                <Suspense fallback={<div style={{height: "100vh", width: "100%", background: "red"}}>LOADING
                    CARD</div>}>
                    <Tours data={data}/>
                </Suspense>
            </div>
            <ToursPagination pages={pages} />
        </>
    )
}
