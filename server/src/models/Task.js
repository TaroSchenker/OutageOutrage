"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const types_1 = require("../types/types");
const mongoose_1 = __importStar(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    type: { type: String, enum: Object.values(types_1.TaskType) },
    complexity: { type: Number, min: types_1.MIN_COMPLEXITY, max: types_1.MAX_COMPLEXITY },
    timeToComplete: {
        type: Number,
        min: types_1.MIN_TIME_TO_COMPLETE,
        max: types_1.MAX_TIME_TO_COMPLETE,
    },
    assignedTo: { type: String, default: null },
    expertiseRequired: { type: String, enum: Object.values(types_1.Expertise) },
    criticality: Number,
    status: { type: String, enum: Object.values(types_1.TaskStatus) },
    dependencies: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Task' }],
    businessImpact: { type: String, enum: Object.values(types_1.BusinessImpact) },
    progress: {
        type: Number,
        min: types_1.MIN_TIME_TO_COMPLETE,
        max: types_1.MAX_TIME_TO_COMPLETE,
        default: 0,
    },
    description: String,
});
exports.TaskModel = mongoose_1.default.model('Task', TaskSchema);
