"use server"

import {State} from "@/app/lib/action/bot";
import {z} from "zod"

let FormData = z.object({
    login: z.string().min(3, "Будь ласка, введіть свій логін, email або номер телефону"),
    password: z.string().min(8, "Довжина паролю повинна бути більшою ніж 8 символів")
})

export type State = {
    status?: number,
    errors?: {
        login?: string[],
        password?: string[],
    };
    message?: string | null;
}


export async function login(state: State | undefined, formData: FormData): Promise<State | undefined> {
    let validityCheck = FormData.safeParse({
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

    return {
        status: 200,
        message: "well done",
    }
}