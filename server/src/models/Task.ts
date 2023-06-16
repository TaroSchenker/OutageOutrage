import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    id: String,
    type: String,
    complexity: Number,
    timeToComplete: Number,
    assignedTo: { type: String, default: null },
    expertiseRequired: String, 
    criticality: Number,
});

export const TaskModel = mongoose.model('Task', TaskSchema);
