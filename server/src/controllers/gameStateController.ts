import express, { Request, Response } from 'express';
import { GameStateService } from '../services/gameStateService';
import { GameService } from '../services/gameService';

const router = express.Router();
const gameStateService = new GameStateService();

export const initializeGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  console.log('gameStateController: initializeGame');
  const game = await gameStateService.initializeGame();
  if (!game) throw new Error('Game not found');

  res.status(201).json(game).end();
  return;
};

export const newTurn = async (req: Request, res: Response): Promise<void> => {
  console.log('Start New Turn Controller Active');
  console.log('gameId in newturn:', req.params.gameId);
  const game = await gameStateService.startNewTurn(req.params.gameId);
  if (!game) throw new Error('Game not found');

  res.status(200).json(game).end();
  return;
};

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const processTaskAssignments = async (
//   req: Request,
//   res: Response,
// ): Promise<void> => {
//   console.log('process task assignments');
// const game = await gameStateServic
//    game = await gameStateService.processTaskAssignments(game)
//   res.status(200).json(game).end();
//   return;
// };

export { router as gameStateController };
