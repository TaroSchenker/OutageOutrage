import mongoose from 'mongoose';
import { IStaff, MIN_SKILL_LEVEL, MAX_SKILL_LEVEL, MIN_MORALE, MAX_MORALE } from '../types/types';

const StaffSchema = new mongoose.Schema({
    name: String,
    role: String,
    expertise: String, 
    ambition: { type: Number, min: MIN_MORALE, max: MAX_MORALE },
    loyalty: { type: Number, min: MIN_MORALE, max: MAX_MORALE },
    skillLevel: { type: Number, min: MIN_SKILL_LEVEL, max: MAX_SKILL_LEVEL },
    resilience: { type: Number, min: MIN_MORALE, max: MAX_MORALE },
    adaptability: { type: Number, min: MIN_MORALE, max: MAX_MORALE },
    morale: { type: Number, min: MIN_MORALE, max: MAX_MORALE },
    currentTask: { type: String, default: null },
});

export const StaffModel = mongoose.model<IStaff>('Staff', StaffSchema);
