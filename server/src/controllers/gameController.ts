import { GameService } from '../services/gameService';
import { Request, Response } from 'express';

const gameService = new GameService();
export const getAllGames = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const allGames = await gameService.getAllGames();
  res.json(allGames).end();
  return;
};

export const getGameByIdPopulated = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.getGameByIdPopulated(req.params.gameId);
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.json(game).end();
  return;
};

export const createGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.createGame(req.body.gameData);
  res.status(201).json(game).end();
  return;
};

export const updateGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.updateGame(
    req.params.gameId,
    req.body.gameData,
  );
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json(game).end();
  return;
};

export const deleteGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.deleteGame(req.params.gameId);
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json(game).end();
  return;
};

export const addStaffToGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.addStaffToGame(
    req.params.gameId,
    req.params.staffId,
  );
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json('game').end();
  return;
};

export const removeStaffFromGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.removeStaffFromGame(
    req.params.gameId,
    req.params.staffId,
  );
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json('game').end();
  return;
};

export const addTaskToGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.addTaskToGame(
    req.params.gameId,
    req.params.taskId,
  );
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json(game).end();
  return;
};

export const removeTaskFromGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.removeTaskFromGame(
    req.params.gameId,
    req.params.taskId,
  );
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json(game).end();
  return;
};

export const addEventToGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.addEventToGame(
    req.params.gameId,
    req.params.eventId,
  );
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json(game).end();
  return;
};

export const removeEventFromGame = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const game = await gameService.removeEventFromGame(
    req.params.gameId,
    req.params.eventId,
  );
  if (!game) {
    res.status(404).json({ message: 'Game not found' }).end();
    return;
  }
  res.status(200).json('game').end();
  return;
};
