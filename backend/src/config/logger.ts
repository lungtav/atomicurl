import pino from "pino";
import { env } from "./env.js";

const isDevelopment = env.NODE_ENV === "development";

export const logger = pino({
  level: process.env.LOG_LEVEL || "info",

  ...(isDevelopment && {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    },
  }),
});
