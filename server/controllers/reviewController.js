import Review from "../models/reviewModel.js";
import Gig from "../models/gigModel.js";

export const createReview = async (req, res) => {
    if (req.isSeller) {
        return res.status(403).send({
            err: 1,
            msg: "Sellers can't create a review!",
        });
    }
    const newReview = new Review({
        userId: req.userId,
        gigId: req.body.gigId,
        desc: req.body.desc,
        star: req.body.star,
    });
    try {
        const review = await Review.findOne({
            gigId: req.body.gigId,
            userId: req.userId,
        });

        if (review)
            return res.status(403).send({
                err: 1,
                msg: "You have already created a review for this gig!",
            });

        //TODO: check if the user purchased the gig.

        const savedReview = await newReview.save();

        await Gig.findByIdAndUpdate(req.body.gigId, {
            $inc: { totalStars: req.body.star, starNumber: 1 },
        });
        return res.status(201).send({
            err: 0,
            res: savedReview,
        });
    } catch (error) {
        return res
            .status(500)
            .send("Failed at createReview controller ", error);
    }
};
export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({
            gigId: req.params.gigId,
        });
        return res.status(200).send({
            err: 0,
            res: reviews,
        });
    } catch (error) {
        return res.status(500).send("Failed at getReviews controller ", error);
    }
};
export const deleteReview = async (req, res) => {
    try {
    } catch (error) {
        return res
            .status(500)
            .send("Failed at deleteReviews controller", error);
    }
};
