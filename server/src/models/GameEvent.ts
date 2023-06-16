import mongoose from 'mongoose';
import { IGameEvent } from '../types/types';

const GameEventSchema = new mongoose.Schema({
    id: String,
    type: String,
    severity: Number,
    effectOnMorale: Number,
});

export const GameEventModel = mongoose.model<IGameEvent>('Event', GameEventSchema);
