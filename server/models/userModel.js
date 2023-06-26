import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            require: false,
        },
        country: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: false,
        },
        desc: {
            type: String,
            required: false,
        },
        isSeller: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
