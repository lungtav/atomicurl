import * as z from "zod";
import type {
  createUrlSchema,
  getUrlSchema,
} from "../validations/url.validation.js";

export type createUrlInput = z.infer<typeof createUrlSchema>;
export type getUrlInput = z.infer<typeof getUrlSchema>;
