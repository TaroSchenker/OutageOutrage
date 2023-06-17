import mongoose from 'mongoose';
import {
  BusinessImpact,
  IGame,
  MAX_TIME_TO_COMPLETE,
  MIN_TIME_TO_COMPLETE,
} from '../types/types';
import { StaffModel } from './Staff';
import { TaskModel } from './Task';
import GameEventModel from './GameEvent';

const GameSchema = new mongoose.Schema({
  budget: Number, // Add min and max if applicable
  morale: Number, // Add min and max if applicable
  businessImpact: { type: String, enum: Object.values(BusinessImpact) },
  staff: [StaffModel.schema],
  tasks: [TaskModel.schema],
  events: [GameEventModel.schema],
  timeRemaining: {
    type: Number,
    min: MIN_TIME_TO_COMPLETE,
    max: MAX_TIME_TO_COMPLETE,
  },
  startingBudget: Number,
  timePeriod: Number,
});

export const GameModel = mongoose.model<IGame>('Game', GameSchema);
