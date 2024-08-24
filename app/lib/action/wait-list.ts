'use server'

import WaitListUser from "@/app/lib/models/wait-list-user";

import {z} from "zod"
import {Dict, getDictionary} from "@/app/[lang]/dictionaries";
import {cookies} from "next/headers";

const FormData = z.object({
    email: z.string({
        invalid_type_error: "Add email"
    }).email({
        message: "email"
    })
});

export type State = {
    status?: number,
    errors?: {
        email?: string[]
    };
    message?: string | null | Dict;
};


export async function appendUser(prevState: State, formData: FormData) {

    try {
        let lang = await cookies().get("lang")?.value || "en"
        let t = await getDictionary(lang)

        let validatedFields = FormData.safeParse({
            email: formData.get("email")
        })

        if (!validatedFields.success) {
            return {
                status: 400,
                errors: validatedFields.error.flatten().fieldErrors,
                message: {
                    uk: 'Не вдалось додати вас у список очікування. ' + validatedFields.error?.errors.map(item => t.errors[item.message] || item.message).join(". "),
                    en: 'Failed to add you to wait list. ' + validatedFields.error?.errors.map(item => t.errors[item.message] || item.message).join(". "),
                },
            };
        }

        let {email} = validatedFields.data

        let waitListUserThatExist = await WaitListUser.findOne({
            email: email
        })

        if (waitListUserThatExist) {
            return {
                status: 409,
                message: {
                    uk: `Email вже у списку очікування! Незабаром ми звяжемось із вами 🚀`,
                    en: `Email are already on a wait list! We will reach you soon 🚀`
                }
            }
        }

        let newWaitListUser = new WaitListUser({
            email: email
        })

        await newWaitListUser.save()

        return {
            status: 200,
            message: `Ok`
        }
    } catch (e) {
        return {
            status: 500,
            message: {
                uk: `Помилка сервера. ${String(e)}`,
                en: `Server error. ${String(e)}`
            }
        }
    }
}