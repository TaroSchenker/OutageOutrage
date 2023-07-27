import {
  BusinessImpact,
  Expertise,
  ITask,
  MAX_COMPLEXITY,
  MAX_TIME_TO_COMPLETE,
  MIN_COMPLEXITY,
  MIN_TIME_TO_COMPLETE,
  TaskStatus,
  TaskType,
} from '../types/types';
import mongoose, { Schema } from 'mongoose';

const TaskSchema = new mongoose.Schema({
  type: { type: String, enum: Object.values(TaskType) },
  complexity: { type: Number, min: MIN_COMPLEXITY, max: MAX_COMPLEXITY },
  timeToComplete: {
    type: Number,
    min: MIN_TIME_TO_COMPLETE,
    max: MAX_TIME_TO_COMPLETE,
  },
  assignedTo: { type: String, default: null },
  expertiseRequired: { type: String, enum: Object.values(Expertise) },
  criticality: Number,
  status: { type: String, enum: Object.values(TaskStatus) },
  dependencies: [{ type: Schema.Types.ObjectId, ref: 'Task' }], // tasks that must be completed before this task can be started
  businessImpact: { type: String, enum: Object.values(BusinessImpact) },
  progress: {
    type: Number,
    min: MIN_TIME_TO_COMPLETE,
    max: MAX_TIME_TO_COMPLETE,
    default: 0,
  },
  description: String,
});

export const TaskModel = mongoose.model<ITask>('Task', TaskSchema);
