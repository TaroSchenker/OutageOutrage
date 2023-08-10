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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameStateController = exports.processTaskAssignments = exports.newTurn = exports.initializeGame = void 0;
const express_1 = __importDefault(require("express"));
const gameStateService_1 = require("../services/gameStateService");
const router = express_1.default.Router();
exports.gameStateController = router;
const gameStateService = new gameStateService_1.GameStateService();
const initializeGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('gameStateController: initializeGame');
    const game = yield gameStateService.initializeGame();
    res.status(201).json(game);
});
exports.initializeGame = initializeGame;
const newTurn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Start New Turn Controller Active');
    console.log('gameId in newturn:', req.params.gameId);
    const game = yield gameStateService.startNewTurn(req.params.gameId);
    res.status(200).json(game);
});
exports.newTurn = newTurn;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const processTaskAssignments = (req, res) => {
    console.log('process task assignments');
    // const game = await gameStateService.processTaskAssignments
};
exports.processTaskAssignments = processTaskAssignments;
