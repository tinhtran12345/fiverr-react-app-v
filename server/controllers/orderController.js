import Order from "../models/orderModel.js";
import Gig from "../models/gigModel.js";

export const intent = async (req, res) => {
    try {
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at order controller ", error);
    }
};

export const createOrder = async (req, res) => {
    try {
        const gig = await Gig.findById(req.params.gigId);
        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: "temporary",
        });
        await newOrder.save();
        return res.status(200).send({
            err: 0,
            msg: "Successful",
        });
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at create controller ", error);
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({
            ...(req.sellerId
                ? { sellerId: req.userId }
                : { buyerId: req.userId }),
        });
        return res.status(200).send({
            err: 0,
            res: orders,
        });
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at getOrders controller", error);
    }
};

export const confirm = async (req, res) => {
    try {
    } catch (error) {
        return res
            .status(500)
            .send("Something went wrong at confirm controller ", error);
    }
};
