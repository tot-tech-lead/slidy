import { NextRequest, NextResponse } from "next/server";
import Image from "@/app/lib/models/image";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        let identifier = params.id;

        if (!identifier || identifier === "undefined") {
            throw new Error("Invalid image identifier");
        }

        let image = await Image.findById(identifier);

        if (!image) {
            throw new Error("Image not found");
        }

        let response = new NextResponse(image.data);
        await response.headers.set('content-type', image.mimetype);

        return response;
    } catch (error) {
        return NextResponse.json({
            message: "Please enter title"
        }, {
            status: 404,
            statusText: "Not found",
        })
    }
}
