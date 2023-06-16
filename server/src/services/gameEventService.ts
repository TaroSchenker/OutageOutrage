import GameEventModel from '../models/GameEvent';
import { IGameEvent } from '../types/types';

export class GameEventService {
  // Retrieve all game events
  getAllEvents(): Promise<IGameEvent[]> {
    return GameEventModel.find({}).exec();
  }

  // Retrieve a game event by ID
  getEventById(id: string): Promise<IGameEvent | null> {
    return GameEventModel.findById(id).exec();
  }

  // Create a new game event
  createEvent(eventData: Partial<IGameEvent>): Promise<IGameEvent> {
    const gameEvent = new GameEventModel(eventData);
    return gameEvent.save();
  }

  // Update a game event
  updateEvent(
    id: string,
    eventData: Partial<IGameEvent>,
  ): Promise<IGameEvent | null> {
    return GameEventModel.findByIdAndUpdate(id, eventData, {
      new: true,
    }).exec();
  }

  // Delete a game event
  deleteEvent(id: string): Promise<IGameEvent | null> {
    return GameEventModel.findByIdAndDelete(id).exec();
  }
}
