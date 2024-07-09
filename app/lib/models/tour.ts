import mongoose, {Model, Schema, model} from "mongoose";
import {tourCategories} from "@/app/lib/data-define"
import {enumCountries, enumCurrency} from "@/app/lib/types/data";
import {Tour} from "@/app/lib/types/mongo-models";


let tourSchema = new Schema<Tour>({
    createdAt: {type: Date, required: true, default: Date.now()},
    name: {type: String, required: [true, "Name is required"]},
    category: {
        type: String, required: [true, "Type of tour is reuired"], enum: {
            values: tourCategories,
            message: "{VALUE} is not supported"
        }
    },
    images: [
        {type: Schema.Types.ObjectId, ref: "image"}
    ],
    locations: {
        type: [{
            type: {type: String, enum: ['Point'], required: true},
            name: {type: String, required: [true, "Name of location is required"]},
            description: {
                type: String, validate: {
                    validator: function (v) {
                        return v.length <= 69;
                    }, message: `Your description to location has more than 69 symbols!`
                }
            },
            coordinates: {type: [Number], required: [true, "Coordinates are required"]}
        }], default: []
    },
    description: {
        short: {type: String, required: [true, "Short description is required"]}, long: {type: String}
    },
    durationInHours: {type: Number, required: true},
    lengthInKilometers: {type: Number, required: true},
    peopleCountPerTour: {type: Number, required: true},
    pricePerPerson: {
        count: {type: Number, required: [true, "Count is required"]},
        currency: {type: String, enum: enumCurrency, required: [true, "Currency is required"]}
    },
    feedbacks: {
        type: [{type: Schema.Types.ObjectId, ref: "feedback"}], default: []
    },
    guide: {
        contactLink: {type: String, required: [true, "Guide contact is required"]},
        profile: {type: Schema.Types.ObjectId, ref: "tour-guide", required: true}
    },
    city: {type: String, required: [true, "City is required"]},
    country: {
        type: String, required: [true, "Country is required!"], enum: {
            values: enumCountries, message: '{VALUE} is not supported'
        }
    },
});

let tourModel: Model<Tour> = mongoose.models?.tour || model("tour", tourSchema);

export default tourModel;
