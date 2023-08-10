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
exports.removeEventFromGame = exports.addEventToGame = exports.removeTaskFromGame = exports.addTaskToGame = exports.removeStaffFromGame = exports.addStaffToGame = exports.deleteGame = exports.updateGame = exports.createGame = exports.getGameByIdPopulated = exports.getAllGames = void 0;
const gameService_1 = require("../services/gameService");
const gameService = new gameService_1.GameService();
const getAllGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allGames = yield gameService.getAllGames();
    return res.json(allGames);
});
exports.getAllGames = getAllGames;
const getGameByIdPopulated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.getGameByIdPopulated(req.params.gameId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.json(game);
});
exports.getGameByIdPopulated = getGameByIdPopulated;
const createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.createGame(req.body.gameData);
    return res.status(201).json(game);
});
exports.createGame = createGame;
const updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.updateGame(req.params.gameId, req.body.gameData);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json(game);
});
exports.updateGame = updateGame;
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.deleteGame(req.params.gameId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json(game);
});
exports.deleteGame = deleteGame;
const addStaffToGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.addStaffToGame(req.params.gameId, req.params.staffId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json('game');
});
exports.addStaffToGame = addStaffToGame;
const removeStaffFromGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.removeStaffFromGame(req.params.gameId, req.params.staffId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json('game');
});
exports.removeStaffFromGame = removeStaffFromGame;
const addTaskToGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.addTaskToGame(req.params.gameId, req.params.taskId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json(game);
});
exports.addTaskToGame = addTaskToGame;
const removeTaskFromGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.removeTaskFromGame(req.params.gameId, req.params.taskId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json(game);
});
exports.removeTaskFromGame = removeTaskFromGame;
const addEventToGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.addEventToGame(req.params.gameId, req.params.eventId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json(game);
});
exports.addEventToGame = addEventToGame;
const removeEventFromGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield gameService.removeEventFromGame(req.params.gameId, req.params.eventId);
    if (!game) {
        return res.status(404).json({ message: 'Game not found' });
    }
    return res.status(200).json('game');
});
exports.removeEventFromGame = removeEventFromGame;
