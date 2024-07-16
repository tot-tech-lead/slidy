"use client"

import styles from "./tour-card.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import defaultAvatar from "@/public/assets/SVG/default-avatar.svg"
import imageNotFound from "@/public/assets/SVG/image-not-found.svg"

import {useEffect, useState} from "react";
import Image from "next/image";

import {TourPopulated} from "@/app/lib/types/mongo-models";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import {nunito} from "@/app/ui/fonts";


export default function TourCard(
    {data, action}: {
        data: TourPopulated,
        action: {
            navigateTo: string,
            title: string
        }
    }
) {
    let [image, setImage] = useState(()=>{
        if (typeof window !== 'undefined') {
            console.log("LINK TO IMAGE IS", `${location?.origin}/api/image/${data.images[0]}`)
            return `${location?.origin}/api/image/${data.images[0]}`
        }

        return imageNotFound
    })
    let router = useRouter()
    let [imgWidth, setImgWidth] = useState(150)

    useEffect(() => {
        let resizeFnc = () => {
            let card = document.querySelector<HTMLElement>(`.${styles.ToursCard}`);
            if (card) {
                setImgWidth(window.innerHeight > 920 ?
                    Math.round(card.offsetWidth / 2)
                    : card.offsetWidth)
            }
        }
        window.addEventListener("resize", resizeFnc)

        return () => {
            window.removeEventListener("resize", resizeFnc)
        }
    }, []);

    return (
        <div className={styles.ToursCard}>
            <div className={styles.imgContainer}>
                <Image className={styles.img}
                       src={image}
                       alt={data.name}
                       width={imgWidth}
                       height={0}
                       onError={() => setImage(imageNotFound)}
                />
            </div>

            <div className={styles.infoBlock}>

                <div className={styles.headlineGroup}>
                    <h3 className={clsx(prestyle.textH3, styles.h3, nunito.className)}>{data.name}</h3>

                    <p className={clsx(prestyle.textPlain, styles.descriptionPara)}>{data.category}</p>
                </div>

                <div className={styles.guideProfile}>
                    <Image
                        className={styles.avatarImg}
                        src={(data.guide.profile.personalAccount.avatar ? `/api/image/${data.guide.profile.personalAccount.avatar}` : defaultAvatar)}
                        alt="avatar"
                        height={50}
                        width={50}
                    />
                    <div className={styles.guideInfo}>
                        <p className={clsx(prestyle.textPlain, styles.guideName)}>{data.guide.profile.personalAccount.name} {data.guide.profile.personalAccount.surname}</p>

                        <p className={clsx(prestyle.textSmallSemiVisible, styles.guideRaiting)}>Рейтинг:</p>

                        {/*<RatingDisplay rating={data.feedbacks.reduce((acc, value) => {*/}
                        {/*    return acc + value.rating*/}
                        {/*}, 0)}/>*/}
                        N/A
                    </div>
                </div>

                <p className={clsx(styles.descriptionP, prestyle.textPlain)}>
                    {data.description.short}
                </p>

                <div className={styles.tourInfo}>
                    <p className={styles.tourInfoP}>
                        <span className={clsx(styles.orange, prestyle.textBold)}>Початкова точка: </span>
                        <span className={clsx(styles.black, prestyle.textPlain)}>{data.locations.at(1)?.name ?? "N/A"}</span>
                    </p>

                    <p className={styles.tourInfoP}>
                        <span className={clsx(styles.orange, prestyle.textBold)}>Кінцева точка: </span>
                        <span className={clsx(styles.black, prestyle.textPlain)}>{data.locations.at(-1)?.name ?? "N/A"}</span>
                    </p>

                    <p className={styles.tourInfoP}>
                        <span className={clsx(styles.orange, prestyle.textBold)}>Тривалість:  </span>
                        <span className={clsx(styles.black, prestyle.textPlain)}> {data.durationInHours}</span>
                    </p>

                    <p className={styles.tourInfoP}>
                        <span className={clsx(styles.orange, prestyle.textBold)}>Довжина: </span>
                        <span className={clsx(styles.black, prestyle.textPlain)}>{data.lengthInKilometers} км</span>
                    </p>

                    <p className={styles.tourInfoP}>
                        <span className={clsx(styles.orange, prestyle.textBold)}>Тип:  </span>
                        <span
                            className={clsx(styles.black, prestyle.textPlain)}>від {data.peopleCountPerTour - 3} до {data.peopleCountPerTour + 3} людей</span>
                    </p>

                    <p className={styles.tourInfoP}>
                        <span className={clsx(styles.orange, prestyle.textBold)}>Ціна: </span>
                        <span className={clsx(styles.black, prestyle.textPlain)}>{data.pricePerPerson.count} {data.pricePerPerson.currency}/особа</span>
                    </p>
                </div>

                <button className={clsx(prestyle.buttonFilled)}
                        type='button'
                        onClick={() => {
                            router.push(action.navigateTo)
                        }}
                >
                    {action.title}
                </button>
            </div>
        </div>)
}