import mongoose from 'mongoose';
import { ITask } from '../types/types';

const TaskSchema = new mongoose.Schema({
    id: String,
    type: String,
    complexity: Number,
    timeToComplete: Number,
    assignedTo: { type: String, default: null },
    expertiseRequired: String, 
    criticality: Number,
});

export const TaskModel = mongoose.model<ITask>('Task', TaskSchema);
