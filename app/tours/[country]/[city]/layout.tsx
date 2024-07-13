import type {Metadata} from "next";

import styles from "./tours.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import Filter from "@/app/ui/filter/filter"
import clsx from "clsx";
import {nunito} from "@/app/ui/fonts";
import React from "react";

export default function Layout({children}: {
    children: React.ReactNode;
}) {

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
