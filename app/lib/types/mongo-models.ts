/**
 * file that contains schema types of files in Mongo DB
 * */

import {EnumCountries, EnumCurrency} from "@/app/lib/types/data";
import mongoose, {Types} from "mongoose";
import {tourCategories} from "@/app/lib/data-define";

interface ActivityItem {
    typeOfActivity: string,
    timestamp: Date
}

export interface AuthData {
    email: string,
    name: string,
    surname: string,
    patronymic: string,
    phoneNumber: string,
    country: EnumCountries,
    dateOfBirth: Date,
    username: string,
    password: string,
    profession: { type: String },
    role: "TOURIST" | "GUIDE" | "ADMIN",
    avatar: Types.ObjectId,
    activity: ActivityItem[],
    comparePassword: Function
}

export interface FeedbackSchema {
    responder: Types.ObjectId,
    points: 1 | 2 | 3 | 4 | 5,
    comment: string,
    relatedTo: {
        tour: Types.ObjectId,
        guide: Types.ObjectId,
    }
}

export interface ImageMongoDB {
    createdAt: Date,
    owner: Types.ObjectId,
    usage: "gallery" | "avatar",
    data: Buffer,
    mimetype: string,
    filename: string
}


export interface Location {
    type: string,
    name: string,
    description: string,
    coordinates: [number, number],
    image?: Types.ObjectId,
}

export interface Tour extends mongoose.Document {
    createdAt: Date,
    name: string,
    category: (typeof tourCategories)[number],
    images: Types.ObjectId[],
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
    feedbacks: Types.ObjectId[],
    guide: {
        contactLink: string,
        profile: Types.ObjectId
    },
    city: string,
    country: EnumCountries
}

export interface TourGuide {
    createdAt: Date,
    personalAccount: Types.ObjectId,
    tours: Types.ObjectId[] | [],
    credo: string | "",
    feedbacks: Types.ObjectId[] | [],
    accountApproved: boolean,
    emailVerified: boolean,
    phoneNumberVerified: boolean,
    gallery: Types.ObjectId[] | []
}

export interface WaitListUser {
    email: string
}

export interface TourGuidePopulated extends Omit<TourGuide, "tours" | "feedbacks" | "gallery" | "personalAccount">{
    personalAccount: AuthData,
    tours: Tour[],
    feedbacks: FeedbackSchema[],
    gallery: ImageMongoDB[]
}

export interface TourPopulated extends Omit<Tour, 'guide' | 'images' | 'feedbacks'> {
    images: ImageMongoDB[];
    feedbacks: FeedbackSchema[];
    guide: {
        contactLink: string;
        profile: TourGuidePopulated;
    };
}


