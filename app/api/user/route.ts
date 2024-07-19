"use server"

import {NextRequest, NextResponse} from "next/server";
import AuthData from "@/app/lib/models/auth-data";
import checkToken from "@/app/lib/jwtDecoder";

export async function GET(request: NextRequest) {
    try {
        let {data: id, error} = checkToken()

        if (error) {
            return {
                status: 400,
                message: "Bad request. Wrong token"
            }
        }

        let user = await AuthData.findById(id)

        if (!user) {
            return NextResponse.json({
                status: 404, message: `Not found. There aren't any info about you.`
            }, {
                status: 404,
                statusText: "Not found",
            })

        }

        let {
            name, surname, patronymic,
            email, phoneNumber, username,
            country, dateOfBirth, profession, role, avatar
        } = user

        if (avatar?.data) {
            avatar = `/api/image/${avatar}`
        }

        return NextResponse.json({
            status: 200,
            message: `Ok`,
            body: {
                name, surname, patronymic, email, phoneNumber, country, dateOfBirth, username, profession, role,
                avatar: avatar !== "/api/image/" ? avatar : undefined
            }
        }, {
            status: 200,
            statusText: "Ok",
        })


    } catch (e) {
        console.log(e)
        return NextResponse.json({status: 500, message: `Internal server error. ${e.message}`}, {
            status: 500,
            statusText: "Internal server error",
        })
    }
}
