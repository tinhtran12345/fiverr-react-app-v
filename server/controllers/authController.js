import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import { createError } from "../utils/createError.js";
dotenv.config();

export const register = async (req, res) => {
    try {
        const checkUser = await User.findOne({ username: req.body.username });

        if (checkUser) {
            return res.status(400).send({
                err: 1,
                msg: "The account is already existed",
            });
        } else {
            const hashPassword = bcrypt.hashSync(req.body.password, 5);
            const newUser = new User({
                ...req.body,
                password: hashPassword,
            });
            await newUser.save();
            return res.status(201).send({
                msg: "User has been created",
                err: 0,
            });
        }
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at register controller ", error);
    }
};
export const login = async (req, res) => {
    try {
        // console.log(req.body.username);
        const user = await User.findOne({
            username: req.body.username,
        });
        if (!user) {
            return res.status(404).send({
                err: 1,
                msg: "User not found!",
            });
        }
        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) {
            return res.status(400).send({
                err: 1,
                msg: "Wrong password or username!",
            });
        }
        const token = jwt.sign(
            {
                id: user._id,
                isSeller: user.isSeller,
            },
            process.env.JWT_KEY,
            { expiresIn: "7d" }
        );
        const { password, ...info } = user._doc;
        return res
            .cookie("accessToken", token, {
                httpOnly: true,
            })
            .status(200)
            .send({
                info,
                err: 0,
            });
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at login controller ", error);
    }
};
export const logout = async (req, res) => {
    try {
        res.clearCookie("accessToken", {
            sameSite: "none",
            secure: true,
        })
            .status(200)
            .send({
                err: 0,
                msg: "User has been logged out.",
            });
    } catch (error) {
        return res.status(500).send("Went wrong at logout controller ", error);
    }
};
