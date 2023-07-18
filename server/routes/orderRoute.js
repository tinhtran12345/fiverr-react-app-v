import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
    confirm,
    createOrder,
    getOrders,
    intent,
} from "../controllers/orderController.js";

const router = express.Router();
router.get("/", verifyToken, getOrders);
router.post("/:gigId", verifyToken, createOrder);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.put("/", verifyToken, confirm);

export default router;
