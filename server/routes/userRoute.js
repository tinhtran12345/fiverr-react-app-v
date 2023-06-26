import express from "express";
import { deleteUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
