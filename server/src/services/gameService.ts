import { GameModel } from '../models/Game';
import { IGame } from '../types/types';

export class GameService {
  // Retrieve all games
  getAllGames(): Promise<IGame[]> {
    return GameModel.find({}).exec();
  }

  // Retrieve a game by ID
  getGameById(id: string): Promise<IGame | null> {
    return GameModel.findById(id).exec();
  }

  // Create a new game
  createGame(gameData: Partial<IGame>): Promise<IGame> {
    const game = new GameModel(gameData);
    return game.save();
  }

  // Update a game
  updateGame(id: string, gameData: Partial<IGame>): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(id, gameData, { new: true }).exec();
  }

  // Delete a game
  deleteGame(id: string): Promise<IGame | null> {
    return GameModel.findByIdAndDelete(id).exec();
  }

  // Add a staff member to a game
  addStaffToGame(gameId: string, staffId: string): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(gameId, { $push: { staff: staffId } }, { new: true }).exec();
  }

  // Remove a staff member from a game
  removeStaffFromGame(gameId: string, staffId: string): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(gameId, { $pull: { staff: staffId } }, { new: true }).exec();
  }

  // Add a task to a game
  addTaskToGame(gameId: string, taskId: string): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(gameId, { $push: { tasks: taskId } }, { new: true }).exec();
  }

  // Remove a task from a game
  removeTaskFromGame(gameId: string, taskId: string): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(gameId, { $pull: { tasks: taskId } }, { new: true }).exec();
  }

  // Add an event to a game
  addEventToGame(gameId: string, eventId: string): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(gameId, { $push: { events: eventId } }, { new: true }).exec();
  }

  // Remove an event from a game
  removeEventFromGame(gameId: string, eventId: string): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(gameId, { $pull: { events: eventId } }, { new: true }).exec();
  }
}
