import mongoose, {Schema, model, Model} from "mongoose";
import {FeedbackSchema} from "@/app/lib/types/mongo-models";

let feedbackSchema = new Schema<FeedbackSchema>({
    responder: {type: Schema.Types.ObjectId, ref: "auth-data", required: true},
    points: {type: Number, min: [1, "Points must be at least 1"], max: [5, "Maximum point is 5"]},
    comment: {type: String},
    relatedTo: {
        tour: {type: Schema.Types.ObjectId, ref: "tour"},
        guide: {type: Schema.Types.ObjectId, ref: "auth-data"},
    }
})

let feedbackModel: Model<FeedbackSchema> = mongoose.models?.feedback || model("feedback", feedbackSchema)

export default feedbackModel