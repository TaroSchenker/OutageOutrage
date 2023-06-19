import { GameModel } from '../models/Game';
import { IGame, IGameData } from '../types/types';

export class GameService {
  // Retrieve all games
  getAllGames(): Promise<IGame[]> {
    return GameModel.find({});
  }

  // Retrieve a game by ID
  getGameById(id: string): Promise<IGame | null> {
    return GameModel.findById(id)
      .populate('staff')
      .populate('tasks')
      .populate('events');
  }

  // Create a new game
  createGame(gameData: IGameData): Promise<IGame> {
    const game = new GameModel(gameData);
    return game.save();
  }

  // Update a game
  updateGame(gameId: string, gameData: Partial<IGame>): Promise<IGame | null> {
    return GameModel.findByIdAndUpdate(gameId, gameData, { new: true });
  }

  // Delete a game
  deleteGame(id: string): Promise<IGame | null> {
    return GameModel.findByIdAndDelete(id);
  }
  // Remove a staff member from a game
  // async removeStaffFromGame(
  //   gameId: string,
  //   staffId: string,
  // ): Promise<IGame | null> {
  //   const game = await GameModel.findByIdAndUpdate(
  //     gameId,
  //     { $pull: { staff: staffId } },
  //     { new: true },
  //   );
  //   return game
  //     ? await GameModel.findById(game.id)
  //         .populate('staff')
  //         .populate('tasks')
  //         .populate('events')
  //     : null;
  // }

  // Add a task to a game
  // async addTaskToGame(gameId: string, taskId: string): Promise<IGame | null> {
  //   const game = await GameModel.findByIdAndUpdate(
  //     gameId,
  //     { $push: { tasks: taskId } },
  //     { new: true },
  //   );
  //   return game
  //     ? await GameModel.findById(game.id)
  //         .populate('staff')
  //         .populate('tasks')
  //         .populate('events')
  //     : null;
  // }

  // // Remove a task from a game
  // async removeTaskFromGame(
  //   gameId: string,
  //   taskId: string,
  // ): Promise<IGame | null> {
  //   const game = await GameModel.findByIdAndUpdate(
  //     gameId,
  //     { $pull: { tasks: taskId } },
  //     { new: true },
  //   );
  //   return game
  //     ? await GameModel.findById(game.id)
  //         .populate('staff')
  //         .populate('tasks')
  //         .populate('events')
  //     : null;
  // }

  // // Add an event to a game
  // async addEventToGame(gameId: string, eventId: string): Promise<IGame | null> {
  //   const game = await GameModel.findByIdAndUpdate(
  //     gameId,
  //     { $push: { events: eventId } },
  //     { new: true },
  //   );
  //   return game
  //     ? await GameModel.findById(game.id)
  //         .populate('staff')
  //         .populate('tasks')
  //         .populate('events')
  //     : null;
  // }

  // Remove an event from a game
  //   async removeEventFromGame(
  //     gameId: string,
  //     eventId: string,
  //   ): Promise<IGame | null> {
  //     const game = await GameModel.findByIdAndUpdate(
  //       gameId,
  //       { $pull: { events: eventId } },
  //       { new: true },
  //     );
  //     return game
  //       ? await GameModel.findById(game.id)
  //           .populate('staff')
  //           .populate('tasks')
  //           .populate('events')
  //       : null;
  //   }
}
