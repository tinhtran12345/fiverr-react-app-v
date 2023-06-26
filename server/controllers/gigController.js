import Gig from "../models/gigModel.js";

export const createGig = async (req, res) => {
    if (!req.isSeller) {
        return res.status(403).send({
            err: 1,
            msg: "Only sellers can create a gig!",
        });
    }
    const newGig = new Gig({
        userId: req.userId,
        ...req.body,
    });
    try {
        const savedGig = await newGig.save();
        return res.status(201).send({
            err: 0,
            res: savedGig,
        });
    } catch (error) {
        return res.status(500).send("Failed at createGig controller ", error);
    }
};
export const deleteGig = async (req, res) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (gig.userId !== req.userId) {
            return res.status(403).send({
                err: 1,
                msg: "You can delete only your gig!",
            });
        }
        await Gig.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            err: 0,
            msg: "Gig has been deleted!",
        });
    } catch (error) {
        return res.status(500).send("Failed at deleteGig controller ", error);
    }
};
export const getGig = async (req, res) => {
    try {
        const gig = await Gig.findById(req.params.id);
        if (!gig) {
            return res.status(404).send({
                err: 1,
                msg: "Gig not found!",
            });
        }
        return res.status(200).send({
            err: 0,
            res: gig,
        });
    } catch (error) {
        return res.status(500).send("Failed at getGig controller ", error);
    }
};
export const getGigs = async (req, res) => {
    const q = req.query;
    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.cat && { cat: q.cat }),
        ...((q.min || q.max) && {
            price: {
                ...(q.min && { $gt: q.min }),
                ...(q.max && { $lt: q.max }),
            },
        }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } }),
    };
    try {
        const gigs = await Gig.find(filters).sort({ [q.sort]: -1 });
        return res.status(200).send({
            err: 0,
            res: gigs,
        });
    } catch (error) {
        return res.status(500).send("Failed at getGigs controller ", error);
    }
};
