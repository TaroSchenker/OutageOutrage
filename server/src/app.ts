import express from 'express';
import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';
import connectDb from './config/db';

// Import routers
import staffRouter from './routes/staffRoutes';
import taskRouter from './routes/taskRoutes';
import gameEventRouter from './routes/gameEventRoutes';
import gameRouter from './routes/gameRoutes';
import gameStateRouter from './routes/gameStateRoutes';
import errorHandler from './middlewares/errorHandler'; //

dotenvConfig();

const app = express();
app.use(bodyParser.json());

connectDb();

// //health check
// app.get('/health', async (req: Request, res: Response) => {
//   // ...
// });

// Use routers
app.use('/api/staff', staffRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/gameEvents', gameEventRouter);
app.use('/api/game', gameRouter);
app.use('/api/gameState', gameStateRouter);

// Error handling middleware
app.use(errorHandler); // <-- Use error handler

export default app;
