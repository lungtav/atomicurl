import express from "express";
import cors from "cors";
import helmet from "helmet";
import { corsOptions } from "./lib/corsOption.js";

const createApp = function () {
  const app = express();

  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  return app;
};

export default createApp;
