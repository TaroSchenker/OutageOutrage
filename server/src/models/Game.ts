import mongoose from 'mongoose';
import { IGame } from '../types/types';
import { StaffModel } from './Staff';
import { TaskModel } from './Task';
import { GameEventModel  } from './GameEvent';

const GameSchema = new mongoose.Schema({
    id: String,
    budget: Number, // Add min and max if applicable
    morale: Number, // Add min and max if applicable
    businessImpact: Number, // Add min and max if applicable
    staff: [StaffModel.schema],
    tasks: [TaskModel.schema],
    events: [GameEventModel.schema],
    timeRemaining: Number, // Add min and max if applicable
});

export const GameModel = mongoose.model<IGame>('Game', GameSchema);
