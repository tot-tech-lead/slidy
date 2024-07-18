"use server"

import {z} from "zod"
import jwt from "jsonwebtoken"
import AuthData from "@/app/lib/models/auth-data";
import {cookies} from "next/headers";

import moment from "moment";

import {isPossiblePhoneNumber} from "libphonenumber-js";

let LoginFormData = z.object({
    login: z.string()
        .min(3, "Будь ласка, введіть свій логін, email або номер телефону"),
    password: z.string().min(8, "Довжина паролю повинна бути більшою ніж 8 символів")
})

let RegisterFormData = z.object({
    name: z.string().min(2, "Ім'я не може бути коротшим ніж 2 символи"),
    surname: z.string().min(2, "Прізчище не може бути коротшим ніж 2 символи"),
    patronymic: z.string().min(2, "По-батькові не може бути коротшим ніж 2 символи"),
    email: z.string().email("Введіть валідний email"),
    phoneNumber: z.string().refine(isPossiblePhoneNumber),
    country: z.string(),
    dateOfBirth: z.date().max(new Date(), "Ви впевнені що народились пізніше ніж сьогодні?")
        .min(
            moment.utc().years(-16).toDate(),
            "Щоб користуватись нашим сервісом вам повинно бути мінімум 16 років"
        ),
    username: z.string(),
    password: z.string(),
    profession: z.string(),
})

export type State = {
    status?: number,
    errors?: {
        manual?: string,
        name: string,
        surname: string,
        patronymic: string,
        email: string,
        phoneNumber: string,
        country: string,
        dateOfBirth: Date,
        username: string,
        password: string,
        profession: string,
    };
    message?: string | null;
}


export async function login(state: State | undefined, formData: FormData): Promise<State | undefined> {
    let validityCheck = LoginFormData.safeParse({
        login: formData.get("login"),
        password: formData.get("password")
    })

    if (!validityCheck.success) {
        return {
            status: 400,
            errors: validityCheck.error.flatten().fieldErrors,
            message: validityCheck.error?.errors.map(item => item.message).join(". "),
        }
    }

    try {
        let {
            login,
            password
        } = validityCheck.data

        let user = await AuthData.findOne({
            $or: [
                {email: login},
                {phoneNumber: login},
                {username: login}
            ]
        })

        if (!user) {
            return {
                status: 400,
                message: `Bad request. User with the same email, phone number or username does not exist`,
                errors: {
                    login: ["Такого користувача не існує"]
                }
            }
        }

        let isPasswordCorrect = await user.comparePassword(password)

        if (!isPasswordCorrect) {
            return {
                status: 401,
                message: `Unauthorized. Password incorrect`,
                errors: {
                    password: ["Неправильний пароль"]
                }
            }
        }

        let TOKEN = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '14d'})
        cookies().set("TOKEN", TOKEN, {
            maxAge: 1209600000,
        })

        return {
            status: 200,
            message: `Ok`,
            errors: {}
        }
    } catch (e) {
        return {
            status: 500,
            errors: {
                manual: "Помилка серверу"
            },
            message: String(e)
        }
    }
}

export async function createUser(state: State | undefined, formData: FormData): Promise<State | undefined> {
    try {
        let validate = RegisterFormData.safeParse({
            name: formData.get("name"),
            surname: formData.get("surname"),
            patronymic: formData.get("patronymic"),
            email: formData.get("email"),
            phoneNumber: formData.get("phoneNumber"),
            country: formData.get("country"),
            dateOfBirth: formData.get("dateOfBirth"),
            username: formData.get("username"),
            password: formData.get("password"),
            profession: formData.get("profession"),
        })

        if (!validate.success) {
            return {
                status: 400,
                errors: validate.error.flatten().fieldErrors,
                message: validate.error?.errors.map(item => item.message).join(". "),
            }
        }

        let {
            name, surname, patronymic,
            email, phoneNumber, country,
            dateOfBirth, username, password, profession,
        } = validate.data

        let isUsernameAlreadyExist = await Auth.findOne({
            username: username
        })

        if (isUsernameAlreadyExist) {
            return {
                status: 400,
                errors: {
                    username: ["Користувач із таким псевдонімом вже існує"]
                },
                message: `Account with the same email or phone number or username already exist`
            }
        }

        let isUserAlreadyExist = await Auth.findOne({
            $or: [
                {email: email},
                {phoneNumber: phoneNumber},
            ]
        })

        if (isUserAlreadyExist) {
            return {
                status: 400,
                errors: {
                    manual: "Обліковий запис із таким email або номером телефону вже існує"
                },
                message: `Account with the same email or phone number or username already exist`
            }
        }

        let newUser = new AuthData({
            name, surname, patronymic, email, phoneNumber,
            country, dateOfBirth, username, password, profession,
            role: "TOURIST"
        })

        await newUser.save();

        return {
            status: 200,
            message: `Ok. User created successfully`,
            errors: {}
        }
    } catch (e) {
        console.log(e)
        return {
            status: 500,
            errors: {
                manual: "Помилка серверу"
            },
            message: String(e)
        }
    }
}