import { customAlphabet } from "nanoid";

const generateShortCode = customAlphabet(
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  6,
);

export const shortCodeGenerator = generateShortCode;
