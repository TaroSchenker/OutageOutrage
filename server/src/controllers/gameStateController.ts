import express, { Request, Response } from 'express';
import { GameStateService } from '../services/gameStateService';

const router = express.Router();
const gameStateService = new GameStateService();

export const initializeGame = async (req: Request, res: Response) => {
  console.log('gameStateController: initializeGame');
  const game = await gameStateService.initializeGame();
  console.log('gameStateController: initializeGame: game: ', game);
  res.status(201).json(game);
};

export const newTurn = async (req: Request, res: Response) => {
  console.log('Start New Turn Controller Active');
  console.log('gameId in newturn:', req.params.gameId);
  const game = await gameStateService.startNewTurn(req.params.gameId);
  console.log('start new turn game', game);
  res.status(200).json(game);
};

export { router as gameStateController };