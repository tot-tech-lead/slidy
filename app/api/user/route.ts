"use server"

import {NextRequest, NextResponse} from "next/server";
import AuthData from "@/app/lib/models/auth-data";
import checkToken from "@/app/lib/jwtDecoder";

export async function GET(request: NextRequest) {
    try {
        let {data, error} = checkToken();

        if (error) {
            return NextResponse.json({
                status: 400,
                message: "Bad request. Wrong token"
            }, {
                status: 400
            });
        }

        // @ts-ignore
        let {id} = data;

        let user = await AuthData.findById(id);

        if (!user) {
            return NextResponse.json({
                status: 404,
                message: "Not found. There isn't any info about you."
            }, {
                status: 404
            });
        }

        let {
            name, surname, patronymic,
            email, phoneNumber, username,
            country, dateOfBirth, profession, role, avatar
        } = user;

        let avatarLink: string | null = null;

        if (avatar) {
            avatarLink = `/api/image/${String(avatar)}`;
        }

        return NextResponse.json({
            status: 200,
            message: "Ok",
            body: {
                name, surname, patronymic, email, phoneNumber, country, dateOfBirth, username, profession, role,
                avatar: (avatarLink !== "/api/image/" && avatar !== null) ? avatarLink : undefined
            }
        }, {
            status: 200
        });

    } catch (e) {
        console.log(e);
        return NextResponse.json({
            status: 500,
            message: `Internal server error. ${String(e)}`
        }, {
            status: 500
        });
    }
}
