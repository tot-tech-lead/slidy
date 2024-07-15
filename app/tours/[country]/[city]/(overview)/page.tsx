import styles from "../tours.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import React, {Suspense} from "react";
import Tour from "@/app/lib/models/tour";
import Tours from "@/app/tours/[country]/[city]/(overview)/tours";
import {getTours} from "@/app/lib/data/tours";

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


    return (
        <>
            <div className={styles.cardsGroup}>
                <Suspense fallback={<div>Завантаження</div>}>
                    <Tours query={{
                        category,
                        duration,
                        countOfPeople,
                        price,
                        page,
                        country,
                        city
                    }} />
                </Suspense>
            </div>

            <div className={styles.pagination}>
                {/*{*/}
                {/*    !pending ? !error ? pages.length > 0 ? <>*/}
                {/*        <div onClick={() => page - 1 > 0 ? setPage(page - 1) : setPage(page)}*/}
                {/*             className="Tours__pagination-item"*/}
                {/*        >*/}
                {/*            <img src={prevIcon} alt="previous" className="Tours__pagination-icon"/>*/}
                {/*        </div>*/}
                {/*        {*/}
                {/*            pages.map((pg, idx) =>*/}
                {/*                <div key={`pagination-tours-${idx}`}*/}
                {/*                     onClick={() => setPage(pg)}*/}
                {/*                     className={`Tours__pagination-item ${Number(pg) === Number(page) ? "Tours__pagination-item_active" : ""}`}*/}
                {/*                >*/}
                {/*                    {pg}*/}
                {/*                </div>*/}
                {/*            )*/}
                {/*        }*/}
                {/*        <div className="Tours__pagination-item"*/}
                {/*             onClick={() => page + 1 <= pages.current.at(-1) ? setPage(page + 1) : setPage(page)}*/}
                {/*        >*/}
                {/*            <img src={nextIcon} alt="next" className="Tours__pagination-icon"/>*/}
                {/*        </div>*/}

                {/*    </> : "" : "" : ""*/}
                {/*}*/}
            </div>
        </>
    )
}
