import mongoose, {Schema, model, Model, CallbackError} from "mongoose";
import {enumCountries} from "@/app/lib/types/data";
import bcrypt from "bcrypt"
import {isPossiblePhoneNumber, CountryCode} from "libphonenumber-js";
import {AuthData} from "@/app/lib/types/mongo-models";

let authSchema = new mongoose.Schema<AuthData>({
    email: {
        type: String, validate: {
            validator: function (v) {
                return /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gi.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    name: {type: String, required: [true, "Name is required!"]},
    surname: {type: String, required: [true, "Surname is required!"]},
    patronymic: {type: String, required: [true, "Patronymic is required!"]},
    phoneNumber: {
        type: String, required: [true, "Phone number is required!"],
        validate: {
            validator: function (v) {
                return isPossiblePhoneNumber(v, this.country as CountryCode)
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    country: {
        type: String, required: [true, "Country is required!"], enum: {
            values: enumCountries,
            message: '{VALUE} is not supported'
        }
    },
    dateOfBirth: {type: Date, required: [true, "Date of birth is required!"]},
    username: {type: String, required: [true, "username is required!"], unique: true},
    password: {
        type: String, required: [true, "Password is required!"], validate: {
            validator: function (v) {
                return v.length >= 8;
            },
            message: () => `Password must have at least 8 symbols!`
        }
    },
    profession: {type: String},
    role: {
        type: String, required: true, default: "TOURIST", enum: {
            values: ["TOURIST", "GUIDE", "ADMIN"],
            message: '{VALUE} is not supported'
        }
    },
    avatar: {type: Schema.Types.ObjectId, ref: "image"},
    activity: {
        type: [
            {
                typeOfActivity: {
                    type: String, required: true
                },
                timestamp: {
                    type: Date, default: Date.now(), required: true
                }
            }
        ],
        required: true,
        default: []
    }
})


authSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error as CallbackError);
    }
});

authSchema.methods.comparePassword = async function (candidatePassword: string) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};

let waitListUserModel: Model<AuthData> = mongoose.models.authData || model("authData", authSchema)

export default waitListUserModel
