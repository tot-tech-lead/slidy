import mongoose, {Schema, model, Types, Model} from "mongoose";
import {TourGuide} from "@/app/lib/types/mongo-models";


let tourGuideSchema = new mongoose.Schema<TourGuide>({
    createdAt: {type: Date, default: Date.now(), immutable: true},
    personalAccount: {type: Schema.Types.ObjectId, ref: "auth-data", required: true},
    tours: {
        type: [{
            type: Schema.Types.ObjectId, ref: "tour"
        }],
        default: []
    },
    credo: {type: String, default: ""},
    feedbacks: {
        type: [{
            type: Schema.Types.ObjectId, ref: "feedback"
        }],
        default: []
    },
    accountApproved: {
        type: Boolean, required: true, default: false
    },
    emailVerified: {
        type: Boolean, required: true, default: false,
    },
    phoneNumberVerified: {
        type: Boolean, required: true, default: false
    },
    gallery: {
        type: [{type: Schema.Types.ObjectId, ref: "image"}],
        default: []
    }
})

const tourGuideModel: Model<TourGuide> = mongoose.models["tour-guide"] || model("tour-guide", tourGuideSchema)

export default tourGuideModel