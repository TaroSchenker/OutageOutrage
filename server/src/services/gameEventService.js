"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEventService = void 0;
const GameEvent_1 = __importDefault(require("../models/GameEvent"));
class GameEventService {
    // Retrieve all game events
    getAllEvents() {
        return GameEvent_1.default.find({}).exec();
    }
    // Retrieve a game event by ID
    getEventById(id) {
        return GameEvent_1.default.findById(id).exec();
    }
    // Create a new game event
    createEvent(eventData) {
        const gameEvent = new GameEvent_1.default(eventData);
        return gameEvent.save();
    }
    // Update a game event
    updateEvent(id, eventData) {
        return GameEvent_1.default.findByIdAndUpdate(id, eventData, {
            new: true,
        }).exec();
    }
    // Delete a game event
    deleteEvent(id) {
        return GameEvent_1.default.findByIdAndDelete(id).exec();
    }
}
exports.GameEventService = GameEventService;
