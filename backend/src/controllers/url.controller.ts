import type { Request, Response } from "express";
import { asyncHandler } from "../middleware/async-handler.js";
import {
  createUrlSchema,
  getUrlSchema,
} from "../validations/url.validation.js";
import * as UrlService from "../services/url.services.js";
import type { createUrlInput, getUrlInput } from "../types/url.types.js";
import { ValidationError } from "../errors/ValidationError.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { env } from "../config/env.js";

export const createShortUrl = asyncHandler(
  async (req: Request<{}, createUrlInput>, res: Response) => {
    const parsed = createUrlSchema.safeParse(req.body);

    if (!parsed.success) {
      const messages = parsed.error.issues.map((e) => e.message).join(", ");
      throw new ValidationError(messages);
    }

    const urlRow = await UrlService.createShortUrl(parsed.data);
    const shortUrl = `${env.APP_URL}/${urlRow.short_code}`;
    res.status(200).json({
      ...urlRow,
      shortUrl,
    });
  },
);

export const getOriginalUrl = asyncHandler(
  async (req: Request<getUrlInput>, res: Response) => {
    const parsed = getUrlSchema.safeParse(req.params);
    console.log(parsed);
    if (!parsed.success) {
      const messages = parsed.error.issues.map((e) => e.message).join(", ");
      throw new ValidationError(messages);
    }

    const { original_url } = await UrlService.getOriginalUrl(parsed.data);

    if (!original_url) {
      throw new NotFoundError("short URL not found");
    }
    res.redirect(original_url);
  },
);
