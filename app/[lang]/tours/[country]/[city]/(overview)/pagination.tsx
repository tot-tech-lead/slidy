"use client"

import styles from "@/app/tours/[country]/[city]/tours.module.css";
import Image from "next/image";
import prevIcon from "@/public/assets/SVG/prev.svg";
import clsx from "clsx";
import nextIcon from "@/public/assets/SVG/next.svg";
import React, {useCallback} from "react";

import {useSearchParams, useRouter, usePathname} from "next/navigation";

export default function ToursPagination({pages}: {
    pages: string[]
}) {
    let router = useRouter();
    let pathname = usePathname();
    let parameters = useSearchParams()

    let pageSetter = useCallback((page: number) => {
        return () => {
            let params = new URLSearchParams(parameters)

            if (page <= Number(pages.at(-1)) && page >= 1) {
                params.set('page', String(page))

                if (typeof window !== 'undefined') {
                    router.replace(`${pathname}?${params.toString()}`);
                }
            }
        }
    }, [pages, parameters, pathname, router])


    return (
        <div className={styles.pagination}>
            <div
                className={styles.paginationItem}
                onClick={pageSetter(Number(parameters.get("page")) - 1)}
            >
                <Image src={prevIcon} alt="previous" className={styles.paginationIcon}/>
            </div>
            {
                pages.map((pg, idx) =>
                    <div key={`pagination-tours-${idx}`}
                         onClick={pageSetter(Number(pg))}
                         className={clsx(styles.paginationItem, {
                             [styles.paginationItem_active]: (parameters.get("page") ?? "1") === pg
                         })}
                    >
                        {pg}
                    </div>
                )
            }
            <div className={styles.paginationItem}
                 onClick={pageSetter(Number(parameters.get("page")) + 1)}
            >
                <Image src={nextIcon} alt="next" className={styles.paginationIcon}/>
            </div>
        </div>
    )
}