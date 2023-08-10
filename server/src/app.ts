import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { config as dotenvConfig } from 'dotenv';
import connectDb from './config/db';
import cors from 'cors';
// Import routers
import staffRouter from './routes/staffRoutes';
import taskRouter from './routes/taskRoutes';
import gameEventRouter from './routes/gameEventRoutes';
import gameRouter from './routes/gameRoutes';
import gameStateRouter from './routes/gameStateRoutes';
import errorHandler from './middlewares/errorHandler'; //

dotenvConfig();

const app = express();

// Serve static files from the React app
const clientBuildPath = path.join(__dirname, '../../client/dist');
app.use(express.static(clientBuildPath));

app.use(cors());
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

app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

export default app;
