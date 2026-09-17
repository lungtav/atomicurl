import createApp from "./app.js";
import http from "http";
import { env } from "./config/env.js";

const PORT = env.PORT;
const app = createApp();
const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
