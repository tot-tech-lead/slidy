"use client"

import type {Metadata} from "next";

import styles from "./tours.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import Filter from "@/app/ui/filter/filter"
import clsx from "clsx";
import {nunito} from "@/app/ui/fonts";

export default function Page(
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
            <div className={styles.Tours}>
                <div className={styles.headlineGroup}>
                    <Filter
                        filters={[
                            {
                                type: "text",
                                name: "category",
                                label: "Категорія",
                            }, {
                                type: "text",
                                name: "duration",
                                label: "Тривалість (год)",
                            }, {
                                type: "text",
                                name: "countOfPeople",
                                label: "Кількість людей",
                            }, {
                                type: "text",
                                name: "price",
                                label: "Вартість",
                            },
                        ]}
                    />
                    <h2 className={clsx(styles.headline, prestyle.textH2, nunito.className)}>Результати пошуку</h2>

                    <div className={styles.cardsGroup}>
                        {/*{*/}
                        {/*    !pending ?*/}
                        {/*        !error ?*/}
                        {/*            data.length > 0 ?*/}
                        {/*                data.map((item, idx) =>*/}
                        {/*                    <TourCard key={"TOUR-" + idx} {...{...item}} />*/}
                        {/*                )*/}
                        {/*                : "Немає екскурсій"*/}
                        {/*            : <>{error.status} <br/> {error.message}</>*/}
                        {/*        : "Завантаження"*/}
                        {/*}*/}
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

                </div>
            </div>
        </>
    )
}

export const metadata: Metadata = {
    title: "Slidy - доступні екскурсії",
    robots: "all"
};
