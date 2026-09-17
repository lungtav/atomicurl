import express from "express";
import cors from "cors";
import helmet from "helmet";
import { corsOptions } from "./lib/corsOption.js";
import { uptime } from "process";
import { timeStamp } from "console";

const createApp = function () {
  const app = express();

  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/health", (req, res)=>{
    res.status(200).json({
      status: "UP",
      timeStamp: new Date(),
      uptime: process.uptime()
    })
  })

  return app;
};

export default createApp;
