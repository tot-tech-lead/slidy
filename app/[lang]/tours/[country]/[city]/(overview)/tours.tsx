import styles from "../tours.module.css"

import {TourPopulated} from "@/app/lib/types/mongo-models";

import TourCard from "@/app/ui/tour-card/tourcard";
import {Suspense} from "react";

export default async function Tours({data}: {data: TourPopulated[]}) {
    return (
        <div className={styles.toursContainer}>
            {
                data.map((tour, tourIndex) =>
                    <Suspense key={`suspense-of-tour-${Date.now()}-${tour.name}-${tourIndex}`} fallback={<>Loading</>}>
                        <TourCard key={`tour-${Date.now()}-${tour.name}-${tourIndex}`}
                                  data={tour}
                                  action={{
                                      navigateTo: `/tours/view/${tour._id}`,
                                      title: "Деталі"
                                  }}
                        />
                    </Suspense>
                )
            }
        </div>
    )
}