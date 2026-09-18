import { Router } from "express";
import { createShortUrl, getOriginalUrl } from "../controllers/url.controller.js";

const urlRouter = Router();

urlRouter.post("/", createShortUrl);
urlRouter.get("/:shortCode", getOriginalUrl);

export { urlRouter };
