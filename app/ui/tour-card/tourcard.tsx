"use client"

import styles from "./tour-card.module.css"
import defaultAvatar from "@/public/assets/SVG/default-avatar.svg"

import {useEffect, useState} from "react";
import Image from "next/image";

import {TourPopulated} from "@/app/lib/types/mongo-models";
import {useRouter} from "next/navigation";


export default function TourCard(
    {data, action}: {
        data: TourPopulated,
        action: {
            navigateTo: string,
            title: string
        }
    }
) {

    let router = useRouter()

    let [imgWidth, setImgWidth] = useState(0)

    useEffect(() => {
        let resizeFnc = () => {
            let card = document.querySelector<HTMLElement>(".ToursCard");
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
        <div className='ToursCard'>
            <div className="ToursCard__imgContainer">
                <Image className='ToursCard__img'
                       src={`/api/images/${data.images[0]}`}
                       alt="BigImg"
                       width={imgWidth}
                       height={50}
                />
            </div>

            <div className='ToursCard__info-block'>

                <div className="ToursCard__headline-group">
                    <h3 className='ToursCard__h3'>{data.name}</h3>

                    <p className='ToursCard__description-para'>{data.category}</p>
                </div>

                <div className='ToursCard__guide-profile'>
                    <Image
                        className={'ToursCard__avatar-img'}
                        src={`/api/image/${data.guide.profile.avatar}` || defaultAvatar}
                        alt="avatar"
                        height={50}
                        width={50}
                    />
                    <div className='ToursCard__guide-info'>
                        <p className='ToursCard__guide-name'>{data.guide.profile.name} {data.guide.profile.surname}</p>

                        <p className='ToursCard__guide-raiting'>Рейтинг:</p>

                        {/*<RatingDisplay rating={data.feedbacks.reduce((acc, value) => {*/}
                        {/*    return acc + value.rating*/}
                        {/*}, 0)}/>*/}
                        rating will be soon
                    </div>
                </div>

                <p className='ToursCard__description-p'>
                    {data.description.short}
                </p>

                <div className='ToursCard__tour-info'>
                    <p className='ToursCard__tour-info-p'>
                        <span className='orange'>Початкова точка: </span>
                        <span className='black'>{data.locations.at(1)?.name ?? "N/A"}</span>
                    </p>

                    <p className='ToursCard__tour-info-p'>
                        <span className='orange'>Кінцева точка: </span>
                        <span className='black'>{data.locations.at(-1)?.name ?? "N/A"}</span>
                    </p>

                    <p className='ToursCard__tour-info-p'>
                        <span className='orange'>Тривалість:  </span>
                        <span className='black'> {data.durationInHours}</span>
                    </p>

                    <p className='ToursCard__tour-info-p'>
                        <span className='orange'>Довжина: </span>
                        <span className='black'>{data.lengthInKilometers} км</span>
                    </p>

                    <p className='ToursCard__tour-info-p'>
                        <span className='orange'>Тип:  </span>
                        <span
                            className='black'>від {data.peopleCountPerTour - 3} до {data.peopleCountPerTour + 3} людей</span>
                    </p>

                    <p className='ToursCard__tour-info-p'>
                        <span className='orange'>Ціна: </span>
                        <span className='black'>{data.pricePerPerson.count} {data.pricePerPerson.currency}/особа</span>
                    </p>
                </div>

                <button className='ToursCard__details-btn'
                        type='button'
                        onClick={() => {
                            // router.
                            router.push(action.navigateTo)
                        }}
                >
                    {action.title}
                </button>
            </div>
        </div>)
}