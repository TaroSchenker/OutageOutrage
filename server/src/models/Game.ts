import mongoose from 'mongoose';
import { BusinessImpact, IGame } from '../types/types';
import { StaffModel } from './Staff';
import { TaskModel } from './Task';
import GameEventModel from './GameEvent';

const GameSchema = new mongoose.Schema({
  budget: Number,
  morale: Number,
  businessImpact: { type: String, enum: Object.values(BusinessImpact) },
  staff: [StaffModel.schema],
  tasks: [TaskModel.schema],
  events: [GameEventModel.schema],
  timeRemaining: {
    type: Number,
  },
  startingBudget: Number,
  timePeriod: Number,
});

export const GameModel = mongoose.model<IGame>('Game', GameSchema);
