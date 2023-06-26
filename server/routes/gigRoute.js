import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
    createGig,
    deleteGig,
    getGig,
    getGigs,
} from "../controllers/gigController.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", verifyToken, getGig);
router.get("/", verifyToken, getGigs);

export default router;
