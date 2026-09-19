import express from "express";
import { logger } from "./config/logger.js";
import cors from "cors";
import helmet from "helmet";
import { corsOptions } from "./lib/corsOption.js";
import { appRouter } from "./routes/indexRoutes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const createApp = function () {
  const app = express();

  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", appRouter);

  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "UP",
      timeStamp: new Date(),
      uptime: process.uptime(),
    });
  });

  app.use(errorMiddleware);

  return app;
};

export default createApp;
