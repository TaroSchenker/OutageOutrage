// models/GameEvent.ts
import mongoose from 'mongoose';
import { EventType, IGameEvent } from '../types/types';

const GameEventSchema = new mongoose.Schema({
    type: {type: String, enum: Object.values(EventType)},
    severity: Number, // Add min and max if applicable
    effectOnMorale: Number, // Add min and max if applicable
});

export default mongoose.models.GameEvent || mongoose.model<IGameEvent>('GameEvent', GameEventSchema);
