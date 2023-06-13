import mongoose from 'mongoose';
import { Staff as StaffSchema } from './Staff';
import { Task as TaskSchema} from './Task';
import { Event as EventSchema } from './GameEvent';

const GameSchema = new mongoose.Schema({
    id: String,
    budget: Number,
    morale: Number,
    staff: [StaffSchema],
    tasks: [TaskSchema],
    events: [EventSchema],
    timeRemaining: Number,
});

export const Game = mongoose.model('Game', GameSchema);
