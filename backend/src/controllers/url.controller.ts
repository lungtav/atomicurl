import type { Request, Response } from "express";
import { asyncHandler } from "../middleware/async-handler.js";
import { createUrlSchema } from "../validations/url.validation.js";
import * as UrlService from "../services/url.services.js";
import type { createUrlInput } from "../types/url.types.js";
import { ValidationError } from "../errors/ValidationError.js";
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
