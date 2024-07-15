import {ToursQuery} from "@/app/lib/types/frontend-config";

import {getTours} from "@/app/lib/data/tours";

import TourCard from "@/app/ui/tour-card/tourcard";

export default async function Tours({query}: {query: ToursQuery}) {
    let data = await getTours(query)

    return (
        <div>
            {
                data.map((tour, tourIndex) =>
                    <TourCard key={`tour-${query.page}-${tourIndex}`}
                              data={tour}
                              action={{
                                  navigateTo: `/tours/view/${tour._id}`,
                                  title: "Деталі"
                              }}
                    />
                )
            }
        </div>
    )
}