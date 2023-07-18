import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { createMessage, getMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessage);

export default router;
