import User from "../models/userModel.js";
// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).send({
                err: 1,
                msg: "User not found!",
            });
        }
        if (req.userId !== user._id.toJSON()) {
            return res.status(403).send({
                err: 1,
                msg: "You can delete only your account!",
            });
        }
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            err: 0,
            msg: "Your account deleted",
        });
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at delete controller ", error);
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).send({
            err: 0,
            res: user,
        });
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at getUser controller ", error);
    }
};
