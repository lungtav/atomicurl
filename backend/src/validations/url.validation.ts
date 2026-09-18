import * as z from "zod";

export const createUrlSchema = z.object({
  url: z.url(),
});

export const getUrlSchema = z.object({
  shortCode: z.string().length(6),
});
