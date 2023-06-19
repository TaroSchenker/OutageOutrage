import { GameService } from '../services/gameService';
import { Request, Response } from 'express';

const gameService = new GameService();
export const getAllGames = async (req: Request, res: Response) => {
  const allGames = await gameService.getAllGames();
  return res.json(allGames);
};

export const getGameById = async (req: Request, res: Response) => {
  const game = await gameService.getGameById(req.params.gameId);
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.json(game);
};

export const createGame = async (req: Request, res: Response) => {
  const game = await gameService.createGame(req.body.gameData);
  return res.status(201).json(game);
};

export const updateGame = async (req: Request, res: Response) => {
  const game = await gameService.updateGame(
    req.params.gameId,
    req.body.gameData,
  );
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json(game);
};

export const deleteGame = async (req: Request, res: Response) => {
  const game = await gameService.deleteGame(req.params.gameId);
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json(game);
};

export const addStaffToGame = async (req: Request, res: Response) => {
  const game = await gameService.addStaffToGame(
    req.params.gameId,
    req.params.staffId,
  );
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json('game');
};

export const removeStaffFromGame = async (req: Request, res: Response) => {
  const game = await gameService.removeStaffFromGame(
    req.params.gameId,
    req.params.staffId,
  );
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json('game');
};

export const addTaskToGame = async (req: Request, res: Response) => {
  const game = await gameService.addTaskToGame(
    req.params.gameId,
    req.params.taskId,
  );
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json(game);
};

export const removeTaskFromGame = async (req: Request, res: Response) => {
  const game = await gameService.removeTaskFromGame(
    req.params.gameId,
    req.params.taskId,
  );
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json(game);
};

export const addEventToGame = async (req: Request, res: Response) => {
  const game = await gameService.addEventToGame(
    req.params.gameId,
    req.params.eventId,
  );
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json(game);
};

export const removeEventFromGame = async (req: Request, res: Response) => {
  const game = await gameService.removeEventFromGame(
    req.params.gameId,
    req.params.eventId,
  );
  if (!game) {
    return res.status(404).json({ message: 'Game not found' });
  }
  return res.status(200).json('game');
};
