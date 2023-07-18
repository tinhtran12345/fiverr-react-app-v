import Conversation from "../models/conversationModel.js";

export const createConversation = async (req, res) => {
    const newConversation = new Conversation({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller,
    });
    try {
        const savedConversation = await newConversation.save();
        return res.status(201).send({
            err: 0,
            res: savedConversation,
        });
    } catch (error) {
        return res
            .status(500)
            .send(
                "Something went wrong at createConversation controller ",
                error
            );
    }
};

export const getConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find(
            req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
        ).sort({ updatedAt: -1 });

        return res.status(200).send({
            err: 0,
            res: conversations,
        });
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at getConversation controller ", error);
    }
};

export const getSingleConversation = async (req, res) => {
    try {
        const conversation = await Conversation.findOne({ id: req.params.id });
        if (!conversation)
            return res.status(404).send({ err: 1, msg: "Not found" });
        return res.status(200).send({
            err: 0,
            res: conversation,
        });
    } catch (error) {
        return res
            .status(500)
            .send(
                "Something went wrong at getSingleConversation controller ",
                error
            );
    }
};
export const updateConversation = async (req, res) => {
    try {
        const updatedConversation = await Conversation.findOneAndUpdate(
            { id: req.params.id },
            {
                $set: {
                    // readBySeller: true,
                    // readByBuyer: true,
                    ...(req.isSeller
                        ? { readBySeller: true }
                        : { readByBuyer: true }),
                },
            },
            { new: true }
        );
        return res.status(200).send({
            err: 0,
            res: updatedConversation,
        });
    } catch (error) {
        return res
            .status(500)
            .send(
                "Something went wrong at updateConversation controller ",
                error
            );
    }
};
