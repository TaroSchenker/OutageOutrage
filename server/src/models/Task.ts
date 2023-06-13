import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    id: String,
    type: String,
    complexity: Number,
    timeToComplete: Number,
    assignedTo: { type: String, default: null },
});

export const Task = mongoose.model('Task', TaskSchema);
