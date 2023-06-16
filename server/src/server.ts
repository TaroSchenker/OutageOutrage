import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import { config as dotenvConfig } from "dotenv";
import connectDb from "./config/db";

// Import routers
import staffRouter from "./routes/staffRoutes";
import taskRouter from "./routes/taskRoutes";
import gameEventRouter from "./routes/gameEventRoutes";
import gameRouter from "./routes/gameRoutes";
import mongoose, { Error } from "mongoose";

dotenvConfig();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

connectDb();

//health check 
app.get('/health', async (req: Request, res: Response) => {
  console.log('health check');
  try {
      await mongoose.connection.db.admin().ping();
      res.status(200).json({ status: 'ok', message: 'Connected to MongoDB' });
  } catch (e) {
      console.error(e);
      res.status(500).json({ status: 'error', message: 'Unable to connect to MongoDB' });
  }
});

// Use routers
app.use("/api/staff", staffRouter);
app.use("/api/tasks", taskRouter);
app.use("/api/gameEvents", gameEventRouter);
app.use("/api/game", gameRouter);


// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
