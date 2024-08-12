import {images} from "@/app/lib/data-define";
import styles from "./previewPage.module.css";
import Image from "next/image";
import React from "react";

export default function Slides({currentPage, setSwiperPending}: { currentPage: string, setSwiperPending: Function }) {
    return (
        images[currentPage].map((slide, idx) =>
            <swiper-slide
                style={{width: "100vw"}}
                class={styles.swiperSlide}
                key={`main-slide-${idx}`}
            >
                <Image
                    className={styles.swiperImage}
                    src={slide.Photo}
                    alt={`Огляд міста ${currentPage} ${idx + 1}`}
                    fill={true}
                    sizes="100vw"
                    priority={idx === 0}
                    loading={idx !== 0 ? "lazy" : "eager"}
                    onLoad={() => {
                        if (idx === 0) {
                            setSwiperPending(false)
                        }
                    }}
                />
            </swiper-slide>
        )
    )
}