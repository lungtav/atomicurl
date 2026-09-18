import * as urlRepository from "../repository/url.repository.js";
import type { createUrlInput } from "../types/url.types.js";
import { shortCodeGenerator } from "../lib/code.js";

export const createShortUrl = async (input: createUrlInput) => {
  const { url } = input;

  const shortCode = shortCodeGenerator();

  const urlRow = await urlRepository.createUrl(url, shortCode);
  return urlRow;
};
