'use server'

import {ToursQuery} from "@/app/lib/types/frontend-config";
import Tour from "@/app/lib/models/tour";

import {TOURS_PER_PAGE} from "@/app/lib/constants"


export async function getTours(
    {
        category,
        duration,
        countOfPeople,
        price,
        page,
        country,
        city
    }: ToursQuery
) {
    const pageNum = page ? parseInt(page, 10) : 1;

    const matchCriteria: any = {};

    if (category) {
        matchCriteria.category = {$regex: category, $options: "i"};
    }
    if (duration) {
        matchCriteria.durationInHours = {
            $lte: Number(duration) + 2,
            $gte: Number(duration) - 2,
        };
    }
    if (countOfPeople) {
        matchCriteria.peopleCountPerTour = {
            $lte: Number(countOfPeople) + 3,
            $gte: Number(countOfPeople) - 3,
        };
    }
    if (price) {
        matchCriteria["pricePerPerson.count"] = {
            $lte: Number(price) + 500,
            $gte: Number(price) - 500,
        };
    }
    if (city && city !== "all") {
        matchCriteria.city = {$regex: city, $options: "i"};
    }
    if (country && country !== "all") {
        matchCriteria.country = {$regex: country, $options: "i"};
    }


    const tours = await Tour.aggregate([
        {$match: matchCriteria},
        {$skip: (pageNum - 1) * TOURS_PER_PAGE},
        {$limit: TOURS_PER_PAGE},
        {
            $lookup: {
                from: 'tourguides',
                localField: 'guide.profile',
                foreignField: '_id',
                as: 'guideDetails'
            }
        },
        {
            $addFields: {
                "guide.profile": {$arrayElemAt: ['$guideDetails', 0]}
            }
        },
        {
            $project: {
                guideDetails: 0
            }
        }
    ]).exec();

    return tours
}