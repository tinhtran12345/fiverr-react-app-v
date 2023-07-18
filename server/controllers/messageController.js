import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";
// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const createMessage = async (req, res) => {
    const newMessage = new Message({
        conversationId: req.body.conversationId,
        userId: req.userId,
        desc: req.body.desc,
    });
    try {
        const savedMessage = await newMessage.save();
        await Conversation.findOneAndUpdate(
            { id: req.body.conversationId },
            {
                $set: {
                    readBySeller: req.isSeller,
                    readByBuyer: !req.isSeller,
                    lastMessage: req.body.desc,
                },
            },
            { new: true }
        );
        return res.status(201).send(savedMessage);
    } catch (error) {
        return res
            .status(500)
            .send("Failed at create Message controller", error);
    }
};

export const getMessage = async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.id,
        });
        return res.status(200).send(messages);
    } catch (error) {
        return res.status(500).send("Failed at get Message controller", error);
    }
};
