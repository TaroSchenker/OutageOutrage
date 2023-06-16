import mongoose from 'mongoose';
import { IGameEvent } from '../types/types';

const GameEventSchema = new mongoose.Schema({
    id: String,
    type: String,
    severity: Number, // Add min and max if applicable
    effectOnMorale: Number, // Add min and max if applicable
});

export const GameEventModel = mongoose.model<IGameEvent>('Event', GameEventSchema);
