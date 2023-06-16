import mongoose from 'mongoose';

const GameEventSchema = new mongoose.Schema({
    id: String,
    type: String,
    severity: Number,
    effectOnMorale: Number,
});

export const GameEventModel = mongoose.model('Event', GameEventSchema);
