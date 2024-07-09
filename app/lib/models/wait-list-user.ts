import mongoose, {Model, Schema, model} from "mongoose";
import {WaitListUser} from "@/app/lib/types/mongo-models"


let waitListUserSchema = new Schema<WaitListUser>({
    email: {type: String, required: true, unique: true}
})

let waitListUserModel: Model<WaitListUser> = mongoose.models?.waitListUser || model("waitListUser", waitListUserSchema)

export default waitListUserModel
