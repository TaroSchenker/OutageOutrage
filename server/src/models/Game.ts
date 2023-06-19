import mongoose, { Schema, Document } from 'mongoose';
import { BusinessImpact, IGame } from '../types/types';

const GameSchema = new mongoose.Schema<IGame>({
  budget: Number,
  morale: Number,
  businessImpact: { type: String, enum: Object.values(BusinessImpact) },
  staff: [{ type: Schema.Types.ObjectId, ref: 'Staff' }],
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'GameEvent' }],
  timeRemaining: {
    type: Number,
  },
  startingBudget: Number,
  timePeriod: Number,
});

export const GameModel = mongoose.model<IGame & Document>('Game', GameSchema);
