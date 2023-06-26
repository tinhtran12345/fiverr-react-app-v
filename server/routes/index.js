import userRoute from "./userRoute.js";
import authRoute from "./authRoute.js";
import gigRoute from "./gigRoute.js";

export const initRoute = (app) => {
    app.use("/api/user", userRoute);
    app.use("/api/auth", authRoute);
    app.use("/api/gigs", gigRoute);
    return app.use("/", (req, res) => {
        console.log("Server on ...");
    });
};
