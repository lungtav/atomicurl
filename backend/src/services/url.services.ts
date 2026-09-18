import * as urlRepository from "../repository/url.repository.js";
import type { createUrlInput, getUrlInput } from "../types/url.types.js";
import { shortCodeGenerator } from "../lib/code.js";

export const createShortUrl = async (input: createUrlInput) => {
  const { url } = input;

  const shortCode = shortCodeGenerator();

  const urlRow = await urlRepository.createUrl(url, shortCode);
  return urlRow;
};

export const getOriginalUrl = async (input: getUrlInput) => {
  const { shortCode } = input;

  const originalUrl = await urlRepository.getOriginalUrl(shortCode);

  return originalUrl;
};
