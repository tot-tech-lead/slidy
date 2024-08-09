"use server"

import TelegramBot, {ChatId} from "node-telegram-bot-api";
import {z} from "zod";

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

if (!token || !chatId) {
    throw Error("Missed TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
}

const bot = new TelegramBot(token, {polling: true});

const FormData = z.object({
    email: z.string({
        invalid_type_error: "Додайте email"
    }).email({
        message: "Введіть правильний email"
    }).max(150, "Введіть ел пошту яка містить менше ніж 150 символів").min(1, "Введіть email"),
    name: z.string({
        invalid_type_error: "Додайте ім'я"
    }).max(99, "Ваше ім'я повинно бути коротшим ніж 100 символів").min(1, "Введіть ім'я"),
    message: z.string({
        invalid_type_error: "Додайте повідомлення",
    }).max(480, "Максимальна довжина вашого повідомлення: 480 символів").min(1, "Введіть повідомлення")
});

export type State = {
    status?: number,
    errors?: {
        email?: string[],
        name?: string[],
        message?: string[],
        manual?: string[],
    };
    message?: string | null;
};

export async function sendMessageToTelegram(state: State | undefined, formData: FormData): Promise<State | undefined> {
    let validateInput = FormData.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    });

    if (!validateInput.success) {
        return {
            status: 400,
            errors: validateInput.error.flatten().fieldErrors,
            message: validateInput.error?.errors.map(item => item.message).join(". "),
        };
    }

    let {name, email, message} = validateInput.data;

    try {
        message = message.split(".").join("\\.")
        email = email.split(".").join("\\.")
        name = name.split(".").join("\\.")
        message = message.split("!").join("\\!")
        email = email.split("!").join("\\!")
        name = name.split("!").join("\\!")
        message = message.split("-").join("\\-")
        email = email.split("-").join("\\-")
        name = name.split("-").join("\\-")

        await bot.sendMessage(chatId as ChatId, `🆕 *Увага, нове повідомлення від ${name}\\!* \n\n||${message}||\n\n*📬 Email:* ${email}`, {
            parse_mode: "MarkdownV2"
        });

        return {
            status: 200,
            message: "Ok"
        };
    } catch (e) {
        if (typeof e === "string") {
            return {
                status: 500,
                errors: {
                    manual: [e.toUpperCase()]
                },
                message: `Помилка на сервері. ${e.toUpperCase()}`
            };
        } else if (e instanceof Error) {
            return {
                status: 500,
                errors: {
                    manual: [e.message]
                },
                message: `Помилка на сервері. ${e.message}`
            };
        }
    }
}
