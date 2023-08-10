"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
const Game_1 = require("../models/Game");
class GameService {
    // Retrieve all games
    getAllGames() {
        return Game_1.GameModel.find({});
    }
    // Retrieve a populated game by ID
    getGameByIdPopulated(id) {
        return Game_1.GameModel.findById(id)
            .populate('staff')
            .populate('tasks')
            .populate('events');
    }
    // Retrieve a game by ID
    getGameById(id) {
        return Game_1.GameModel.findById(id);
    }
    // Create a new game
    createGame(gameData) {
        const game = new Game_1.GameModel(gameData);
        return game.save();
    }
    // Update a game
    updateGame(gameId, gameData) {
        return Game_1.GameModel.findByIdAndUpdate(gameId, gameData, { new: true });
    }
    // Delete a game
    deleteGame(id) {
        return Game_1.GameModel.findByIdAndDelete(id);
    }
    // Add a staff to a game
    addStaffToGame(gameId, staffId) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield Game_1.GameModel.findByIdAndUpdate(gameId, { $push: { staff: staffId } }, { new: true });
            return game
                ? yield Game_1.GameModel.findById(game.id)
                    .populate('staff')
                    .populate('tasks')
                    .populate('events')
                : null;
        });
    }
    // Remove a staff member from a game
    removeStaffFromGame(gameId, staffId) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield Game_1.GameModel.findByIdAndUpdate(gameId, { $pull: { staff: staffId } }, { new: true });
            return game
                ? yield Game_1.GameModel.findById(game.id)
                    .populate('staff')
                    .populate('tasks')
                    .populate('events')
                : null;
        });
    }
    // Add a task to a game
    addTaskToGame(gameId, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield Game_1.GameModel.findByIdAndUpdate(gameId, { $push: { tasks: taskId } }, { new: true });
            return game
                ? yield Game_1.GameModel.findById(game.id)
                    .populate('staff')
                    .populate('tasks')
                    .populate('events')
                : null;
        });
    }
    // Remove a task from a game
    removeTaskFromGame(gameId, taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield Game_1.GameModel.findByIdAndUpdate(gameId, { $pull: { tasks: taskId } }, { new: true });
            return game
                ? yield Game_1.GameModel.findById(game.id)
                    .populate('staff')
                    .populate('tasks')
                    .populate('events')
                : null;
        });
    }
    // Add an event to a game
    addEventToGame(gameId, eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield Game_1.GameModel.findByIdAndUpdate(gameId, { $push: { events: eventId } }, { new: true });
            return game
                ? yield Game_1.GameModel.findById(game.id)
                    .populate('staff')
                    .populate('tasks')
                    .populate('events')
                : null;
        });
    }
    // Remove an event from a game
    removeEventFromGame(gameId, eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const game = yield Game_1.GameModel.findByIdAndUpdate(gameId, { $pull: { events: eventId } }, { new: true });
            return game
                ? yield Game_1.GameModel.findById(game.id)
                    .populate('staff')
                    .populate('tasks')
                    .populate('events')
                : null;
        });
    }
}
exports.GameService = GameService;
