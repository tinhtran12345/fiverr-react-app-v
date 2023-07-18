import userRoute from "./userRoute.js";
import authRoute from "./authRoute.js";
import gigRoute from "./gigRoute.js";
import reviewRoute from "./reviewRoute.js";
import orderRoute from "./orderRoute.js";
import conversationRoute from "./conversationRoute.js";
import messageRoute from "./messageRoute.js";

export const initRoute = (app) => {
    app.use("/api/user", userRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/gigs", gigRoute);
    app.use("/api/reviews", reviewRoute);
    app.use("/api/orders", orderRoute);
    app.use("/api/conversations", conversationRoute);
    app.use("/api//messages", messageRoute);
    return app.use("/", (req, res) => {
        console.log("Server on ...");
    });
};
