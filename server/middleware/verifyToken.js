import dotenv from "dotenv";
// import { createError } from "../utils/createError.js";
dotenv.config();
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).send({
            err: 1,
            msg: "You are not authenticated",
        });
    }
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
        if (err)
            return res.status(403).send({
                err: 1,
                msg: "Token is not valid",
            });
        req.userId = payload.id;
        req.isSeller = payload.isSeller;
        next();
    });
};
