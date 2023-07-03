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
    } catch (error) {
        return res
            .status(500)
            .send("Failed at createReview controller ", error);
    }
};
export const getReviews = async (req, res) => {};
export const deleteReview = async (req, res) => {};
