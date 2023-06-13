import express from "express";
import connectDb from "./src/config/db";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const app = express();
const port = 3000;

connectDb();
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
