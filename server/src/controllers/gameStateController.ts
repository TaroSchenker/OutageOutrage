import express, { Request, Response } from 'express';
import { GameStateService } from '../services/gameStateService';

const router = express.Router();
const gameStateService = new GameStateService();

export const initializeGame = async (req: Request, res: Response) => {
  console.log('gameStateController: initializeGame: req.body: ', req.body);
  const game = await gameStateService.initializeGame();
  console.log('gameStateController: initializeGame: game: ', game);
  res.status(201).json(game);
};

// Additional routes go here...

export { router as gameStateController };
