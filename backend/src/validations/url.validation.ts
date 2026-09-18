import * as z from "zod";

export const createUrlSchema = z.object({
  url: z.url(),
});
