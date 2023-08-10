"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/GameEvent.ts
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../types/types");
const GameEventSchema = new mongoose_1.default.Schema({
    type: { type: String, enum: Object.values(types_1.EventType) },
    severity: Number,
    effectOnMorale: Number,
    effectOnBudget: Number,
    effectOnTasks: { type: mongoose_1.default.Schema.Types.Mixed, default: null },
    duration: Number,
});
exports.default = mongoose_1.default.models.GameEvent ||
    mongoose_1.default.model('GameEvent', GameEventSchema);
