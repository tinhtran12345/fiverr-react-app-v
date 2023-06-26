import express from "express";
import { connectedDB } from "./config/connectedDb.js";
import { initRoute } from "./routes/index.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.PUBLIC_URL, credentials: true }));

// initRoute
initRoute(app);

app.listen(port, () => {
    connectedDB();
    console.log(`Server is running on port ${port}`);
});
