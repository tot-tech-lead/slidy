// @ts-nocheck

"use client"

import prestyle from "@/app/lib/ui-components.module.css"
import styles from "./styles.module.css"


import Profile from "@/app/ui/profile/profile";
import {AdvancedMarker, APIProvider, Map, Pin, useMap, useMapsLibrary} from "@vis.gl/react-google-maps";
import {useEffect, useMemo, useState} from "react";
import {AuthData, FeedbackSchema, Location, TourGuidePopulated} from "@/app/lib/types/mongo-models";
import {EnumCurrency} from "@/app/lib/types/data";
import clsx from "clsx";

type Waypoint = {
    location: google.maps.LatLng
    stopover: boolean
}

interface GottenAuth extends Omit<AuthData, "avatar"> {
    avatar: string
}

interface TourGuideGotten extends Omit<TourGuidePopulated, 'personalAccount'> {
    personalAccount: GottenAuth
}


export default function Info(
    {
        _id,
        locations,
        description,
        durationInHours,
        lengthInKilometers,
        peopleCountPerTour,
        pricePerPerson,
        feedbacks,
        guideProfile
    }: {
        _id: string,
        locations: Location[],
        description: {
            short: string,
            long?: string
        },
        durationInHours: number,
        lengthInKilometers: number,
        peopleCountPerTour: number,
        pricePerPerson: {
            count: string,
            currency: EnumCurrency
        },
        feedbacks: FeedbackSchema[],
        guideProfile: TourGuideGotten
    }
) {
    let apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const rating = useMemo(() => {
        return feedbacks.reduce((acc, value) => {
            return acc + value.points
        }, 0);
    }, [feedbacks])

    const startLocation = {
        lat: locations[0].coordinates[0],
        lng: locations[0].coordinates[1]
    };

    const endLocation = {
        lat: locations[locations.length - 1].coordinates[0],
        lng: locations[locations.length - 1].coordinates[1]
    };

    const waypoints = locations.slice(1, -1).map(location =>
        ({
            location: {
                lat: location.coordinates[0],
                lng: location.coordinates[1]
            },
            stopover: true
        })
    );

    console.log(apiKey)

    return (
        <div className={styles.viewTourInfo}>
            <div className={styles.Map}>
                {
                    (typeof apiKey === "string" && !!locations && locations.length > 2) &&
                    <APIProvider apiKey={apiKey} language={"uk"}>
                        <div style={{width: '100%'}}>
                            <Map
                                defaultZoom={16}
                                className={styles.map_frame}
                                defaultCenter={{lat: locations[0].coordinates[0], lng: locations[0].coordinates[1]}}
                                mapId={`APP-MAP-ID-${_id}`}
                                fullscreenControl={false}
                                mapTypeControl={false}
                                streetViewControl={false}
                            >
                                <Directions origin={startLocation}
                                            destination={endLocation}
                                            waypoints={waypoints}
                                />
                                <AdvancedMarker>
                                    <Pin background={'#FFA800'} glyphColor={'#23214140'} borderColor={"#FFA800"}/>
                                </AdvancedMarker>
                            </Map>
                        </div>
                    </APIProvider>
                }
            </div>

            <div className={styles.info_container}>
                <div className={clsx(
                    prestyle.textPlain
                )}>
                    {description.long}
                </div>

                <div className={styles.Info}>

                    <div className={styles.Info_Text}>
                        <p>
                            <span className={prestyle.textBigBold}>Місце зустрічі: </span>
                            <span className={prestyle.textPlain}>{locations.at(0)?.name}</span>
                        </p>

                        <p>
                            <span className={prestyle.textBigBold}>Місце прибуття: </span>
                            <span className={prestyle.textPlain}>{locations.at(-1)?.name}</span>
                        </p>

                        <p>
                            <span className={prestyle.textBigBold}>Орієнтова тривалість подорожі: </span>
                            <span className={prestyle.textPlain}> {durationInHours}</span>
                        </p>

                        <p>
                            <span className={prestyle.textBigBold}>Довжина маршруту: </span>
                            <span className={prestyle.textPlain}>{lengthInKilometers} км</span>
                        </p>

                        <p>
                            <span className={prestyle.textBigBold}>Кількість людей: </span>
                            <span className={prestyle.textPlain}>
                                від {peopleCountPerTour - 2} до {peopleCountPerTour + 2} людей
                            </span>
                        </p>

                        <p>
                            <span className={prestyle.textBigBold}>Договірна ціна: </span>
                            <span
                                className={prestyle.textPlain}>
                                {pricePerPerson.count} {pricePerPerson.currency}/особа
                            </span>
                        </p>

                        <p>
                            <span className={prestyle.textBigBold}>Коментар від організатора: </span>
                            <span className={prestyle.textPlain}>без запізнень</span>
                        </p>
                    </div>

                    <div className={styles.Info_Guide}>
                        <Profile name={guideProfile.personalAccount.name}
                                 surname={guideProfile.personalAccount.surname}
                                 avatar={guideProfile.personalAccount.avatar}
                                 rating={rating}
                        />

                        <div className={styles.Buttons}>
                            <button className={prestyle.buttonOutlined} type='button'>Профіль</button>
                            <button className={prestyle.buttonFilled} type='button'>Підписатись</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Directions({origin, destination, waypoints}: {
    origin: google.maps.LatLngLiteral,
    destination: google.maps.LatLng,
    waypoints?: Waypoint[],
}) {
    const map = useMap();
    const routesLibrary = useMapsLibrary("routes")

    const [directionService, setDirectionService] = useState<google.maps.DirectionsService>();
    const [directionRenderer, setDirectionRenderer] = useState<google.maps.DirectionsRenderer>();

    useEffect(() => {
        if (!routesLibrary || !map) {
            return
        }
        setDirectionService(new routesLibrary.DirectionsService())
        setDirectionRenderer(new routesLibrary.DirectionsRenderer({map}))
    }, [routesLibrary, map]);

    useEffect(() => {
        if (!directionService || !directionRenderer) return

        let routeOptions: {
            origin: LatLng,
            destination: LatLng,
            waypoints?: Waypoint[],
            travelMode: any
        } = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.WALKING,
        }

        if (waypoints.length > 0) {
            routeOptions.waypoints = waypoints
        }

        directionService.route(routeOptions)
            .then(res => {
                directionRenderer.setDirections(res)
            })

    }, [directionService, directionRenderer])

    return null
}