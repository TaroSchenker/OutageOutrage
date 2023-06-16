import mongoose from 'mongoose';
import { StaffModel } from './Staff';
import { TaskModel} from './Task';
import { GameEventModel  } from './GameEvent';

const GameSchema = new mongoose.Schema({
    id: String,
    budget: Number,
    morale: Number,
    businessImpact: Number,
    staff: [StaffModel],
    tasks: [TaskModel],
    events: [GameEventModel],
    timeRemaining: Number,
});

export const GameModel = mongoose.model('Game', GameSchema);
