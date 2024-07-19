import jwt from "jsonwebtoken";

import {cookies} from "next/headers";

const jwtSecret = process.env.JWT_SECRET

if (!jwtSecret) {
    throw Error("Provide JWT_SECRET in environment file")
}


const checkToken = () => {
    const token = cookies().get("TOKEN");

    if (!token) {
        return {error: "401 Unauthorized! Missing token"};
    }

    try {
        const decoded = jwt.verify(token.value, jwtSecret);
        return {
            data: decoded.id
        }
    } catch (error) {
        return {error: "401 Unauthorized! Invalid token"}
    }
};

export default checkToken