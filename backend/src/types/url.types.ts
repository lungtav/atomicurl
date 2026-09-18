import * as z from "zod";
import type { createUrlSchema } from "../validations/url.validation.js";

export type createUrlInput = z.infer<typeof createUrlSchema>;
