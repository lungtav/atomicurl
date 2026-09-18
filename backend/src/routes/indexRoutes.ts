import { Router } from "express";
import { urlRouter } from "./url.route.js";

const appRouter = Router();

appRouter.use("/url", urlRouter);

export { appRouter };