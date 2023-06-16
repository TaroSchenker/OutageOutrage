import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema({
    id: String,
    name: String,
    role: String,
    expertise: String, // Added field
    ambition: Number,
    loyalty: Number,
    skillLevel: Number,
    resilience: Number,
    adaptability: Number,
    morale: Number,
    currentTask: { type: String, default: null },
});

export const Staff = mongoose.model('Staff', StaffSchema);
