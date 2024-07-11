'use server'

import WaitListUser from "@/app/lib/models/wait-list-user";

import {z} from "zod"

const FormData = z.object({
    email: z.string({
        invalid_type_error: "Add email"
    }).email({
        message: "Введіть правильний email"
    })
});

export type State = {
    status?: number,
    errors?: {
        email?: string[]
    };
    message?: string | null;
};


export async function appendUser(prevState: State, formData: FormData) {
    try {
        let validatedFields = FormData.safeParse({
            email: formData.get("email")
        })

        if (!validatedFields.success) {
            return {
                status: 400,
                errors: validatedFields.error.flatten().fieldErrors,
                message: 'Не вдалось додати вас у список очікування. ' + validatedFields.error?.errors.map(item => item.message).join(". "),
            };
        }

        let {email} = validatedFields.data

        let waitListUserThatExist = await WaitListUser.findOne({
            email: email
        })

        if (waitListUserThatExist) {
            return {
                status: 409,
                errors: [],
                message: `Email вже у списку очікування! Незабаром ми звяжемось із вами 🚀`
            }
        }

        let newWaitListUser = new WaitListUser({
            email: email
        })

        await newWaitListUser.save()

        return {
            status: 200,
            errors: [],
            message: `Ok`
        }
    } catch (e) {
        return {
            status: 500,
            errors: [],
            message: `Помилка сервера. ${String(e)}`
        }
    }
}