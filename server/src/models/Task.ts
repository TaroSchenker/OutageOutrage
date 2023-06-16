import { ITask, MAX_COMPLEXITY, MAX_TIME_TO_COMPLETE, MIN_COMPLEXITY, MIN_TIME_TO_COMPLETE } from "../types/types";
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  id: String,
  type: String,
  complexity: { type: Number, min: MIN_COMPLEXITY, max: MAX_COMPLEXITY },
  timeToComplete: { type: Number, min: MIN_TIME_TO_COMPLETE, max: MAX_TIME_TO_COMPLETE },
  assignedTo: { type: String, default: null },
  expertiseRequired: String,
  criticality: Number,
});

export const TaskModel = mongoose.model<ITask>('Event', TaskSchema);
