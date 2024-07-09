import mongoose, {Schema, model, Types, Model} from "mongoose";
import {ImageMongoDB} from "@/app/lib/types/mongo-models";

let imageSchema = new Schema<ImageMongoDB>({
    createdAt: {type: Date, default: Date.now(), required: true},
    owner: {type: Schema.Types.ObjectId, ref: "auth-data"},
    usage: {
        type: String, required: true, enum: {
            values: ["gallery", "avatar"]
        }, default: "gallery"
    },
    data: {type: Buffer, required: true},
    mimetype: {type: String, required: true},
    filename: {type: String, required: true}
});

let imageModel: Model<ImageMongoDB> = mongoose.models?.image || model("image", imageSchema);

export default imageModel;
