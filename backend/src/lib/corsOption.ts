import { env } from "../config/env.js";

export const corsOptions = {
  origin: env.APP_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
