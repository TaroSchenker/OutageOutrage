import mongoose from 'mongoose';

const GameEventSchema = new mongoose.Schema({
    id: String,
    type: String,
    severity: Number,
    effectOnMorale: Number,
});

export const GameEvent = mongoose.model('Event', GameEventSchema);
