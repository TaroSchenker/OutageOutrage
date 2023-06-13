import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    id: String,
    type: String,
    severity: Number,
    effectOnMorale: Number,
});

export const Event = mongoose.model('Event', EventSchema);
