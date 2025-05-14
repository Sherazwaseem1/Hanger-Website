import http from "http";
import { app } from "./app.js";
import { config } from "dotenv";
// import { connectDB } from "./db.js";
// import { v4 as uuidv4 } from "uuid";

const server = http.createServer(app);

config({
  path: "./config.env",
});

// connectDB();


server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
