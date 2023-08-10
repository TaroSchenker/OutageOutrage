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
exports.removeStaffFromTask = exports.assignTaskToStaff = exports.deleteTask = exports.updateTask = exports.createTask = exports.getTaskById = exports.getAllTasks = void 0;
const taskService_1 = require("../services/taskService");
const AppError_1 = __importDefault(require("../utils/AppError"));
const taskService = new taskService_1.TaskService();
const getAllTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskService.getAllTasks();
        return res.json(tasks);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllTasks = getAllTasks;
const getTaskById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskService.getTaskById(req.params.taskId);
        if (!task) {
            throw new AppError_1.default('No task found with that ID', 404);
        }
        return res.json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.getTaskById = getTaskById;
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskService.createTask(req.body);
        return res.status(201).json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.createTask = createTask;
const updateTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskService.updateTask(req.params.taskId, req.body.staffId);
        return res.status(201).json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskService.deleteTask(req.params.taskId);
        if (!task) {
            throw new AppError_1.default('Task not found.', 404);
        }
        return res.json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTask = deleteTask;
const assignTaskToStaff = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskService.assignTaskToStaff(req.params.taskId, req.body.staffId);
        if (!task) {
            throw new AppError_1.default('Task not found.', 404);
        }
        return res.json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.assignTaskToStaff = assignTaskToStaff;
const removeStaffFromTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield taskService.removeStaffFromTask(req.params.taskId);
        if (!task) {
            throw new AppError_1.default('Task not found.', 404);
        }
        return res.status(201).json(task);
    }
    catch (error) {
        next(error);
    }
});
exports.removeStaffFromTask = removeStaffFromTask;
