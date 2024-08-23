import type {Metadata} from "next";

import styles from "./tours.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import Filter from "@/app/ui/filter/filter"
import clsx from "clsx";
import {nunito} from "@/app/ui/fonts";
import React from "react";
import {getCategories} from "@/app/lib/data/tours";

export default async function Layout({children}: {
    children: React.ReactNode;
}) {
    let categories = await getCategories();

    return (
        <>
            <div className={styles.Tours}>
                <div className={styles.headlineGroup}>
                    <Filter
                        filters={[
                            {
                                type: "select",
                                name: "category",
                                label: "Категорія",
                                data: categories
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
                </div>
                {children}
            </div>
        </>
    )
}

export const metadata: Metadata = {
    title: "Slidy - доступні екскурсії",
    robots: "all"
};
