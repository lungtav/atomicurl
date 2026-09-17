import express from "express";
import cors from "cors";
import helmet from "helmet";
import { corsOptions } from "./lib/corsOption.js";

const createApp = function () {
  const app = express();

  app.use(cors(corsOptions));
  app.use(helmet());

  return app;
};

export default createApp;
