import mongoose from 'mongoose';
import { EventType, IGameEvent } from '../types/types';

const GameEventSchema = new mongoose.Schema({
    type: {type: String, enum: Object.values(EventType)},
    severity: Number, // Add min and max if applicable
    effectOnMorale: Number, // Add min and max if applicable
});

export const GameEventModel = mongoose.model<IGameEvent>('Event', GameEventSchema);
