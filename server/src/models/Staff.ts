import mongoose from 'mongoose';
import { IStaff } from '../types/types';

const StaffSchema = new mongoose.Schema({
    name: String,
    role: String,
    expertise: String, 
    ambition: Number,
    loyalty: Number,
    skillLevel: Number,
    resilience: Number,
    adaptability: Number,
    morale: Number,
    currentTask: { type: String, default: null },
});

export const StaffModel = mongoose.model<IStaff>('Staff', StaffSchema);
