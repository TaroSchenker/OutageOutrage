import express, { Request, Response } from 'express';
import { GameStateService } from '../services/gameStateService';

const router = express.Router();
const gameStateService = new GameStateService();

export const initializeGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  console.log('gameStateController: initializeGame');
  const game = await gameStateService.initializeGame();

  res.status(201).json(game);
};

export const newTurn = async (req: Request, res: Response): Promise<void> => {
  console.log('Start New Turn Controller Active');
  console.log('gameId in newturn:', req.params.gameId);
  const game = await gameStateService.startNewTurn(req.params.gameId);

  res.status(200).json(game);
};

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const processTaskAssignments = (req: Request, res: Response): Promise<void> => {
//   console.log('process task assignments');
//   // const game = await gameStateService.processTaskAssignments
// };

export { router as gameStateController };
