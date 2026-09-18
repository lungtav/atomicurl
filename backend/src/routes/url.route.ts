import { Router } from "express";
import { createShortUrl } from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/", createShortUrl);

export { urlRouter };
