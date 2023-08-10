"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../types/types");
const StaffSchema = new mongoose_1.default.Schema({
    name: String,
    avatarUrl: String,
    role: { type: String, enum: Object.values(types_1.Role) },
    expertise: { type: String, enum: Object.values(types_1.Expertise) },
    ambition: { type: Number, min: types_1.MIN_MORALE, max: types_1.MAX_MORALE },
    loyalty: { type: Number, min: types_1.MIN_MORALE, max: types_1.MAX_MORALE },
    skillLevel: { type: Number, min: types_1.MIN_SKILL_LEVEL, max: types_1.MAX_SKILL_LEVEL },
    resilience: { type: Number, min: types_1.MIN_MORALE, max: types_1.MAX_MORALE },
    adaptability: { type: Number, min: types_1.MIN_MORALE, max: types_1.MAX_MORALE },
    morale: { type: Number, min: types_1.MIN_MORALE, max: types_1.MAX_MORALE },
    currentTask: { type: String, default: null },
    availability: Boolean,
    salary: Number,
    satisfaction: Number,
});
exports.StaffModel = mongoose_1.default.model('Staff', StaffSchema);
