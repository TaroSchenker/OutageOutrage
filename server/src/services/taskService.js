"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const Task_1 = require("../models/Task");
const types_1 = require("../types/types");
const AppError_1 = __importDefault(require("../utils/AppError"));
class TaskService {
    // Retrieve all tasks
    getAllTasks() {
        return Task_1.TaskModel.find({});
    }
    // Retrieve a task by ID
    getTaskById(id) {
        return Task_1.TaskModel.findById(id);
    }
    // Create a new task
    createTask(taskData) {
        const task = new Task_1.TaskModel(taskData);
        return task.save();
    }
    // Update a task
    updateTask(id, taskData) {
        return Task_1.TaskModel.findByIdAndUpdate(id, taskData, { new: true });
    }
    // Delete a task
    deleteTask(id) {
        return Task_1.TaskModel.findByIdAndDelete(id);
    }
    // Assign a task to a staff member
    assignTaskToStaff(taskId, staffId) {
        console.log('****Assign task to staff**** TASK / STAFF ID', taskId, staffId);
        try {
            const updatedTask = Task_1.TaskModel.findByIdAndUpdate(taskId, { assignedTo: staffId }, { new: true });
            return updatedTask;
        }
        catch (error) {
            console.error('Error updating task:', error);
            throw new AppError_1.default('An error occurred while updating the task', 500);
        }
    }
    // Remove a task from a staff member
    removeStaffFromTask(taskId) {
        console.log('removeStaffFromTask');
        return Task_1.TaskModel.findByIdAndUpdate(taskId, { assignedTo: '', status: types_1.TaskStatus.NOT_STARTED, progress: 0 }, { new: true });
    }
}
exports.TaskService = TaskService;
