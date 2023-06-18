// models/GameEvent.ts
import mongoose from 'mongoose';
import { EventType, IGameEvent } from '../types/types';

const GameEventSchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(EventType) },
  severity: Number,
  effectOnMorale: Number,
  effectOnBudget: Number,
  effectOnTasks: { type: mongoose.Schema.Types.Mixed, default: null },
});

export default mongoose.models.GameEvent ||
  mongoose.model<IGameEvent>('GameEvent', GameEventSchema);
