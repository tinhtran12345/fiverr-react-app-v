import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.set("strictQuery", true);
export const connectedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongodb");
    } catch (error) {
        console.log("Failed at connected DB:", error);
    }
};
