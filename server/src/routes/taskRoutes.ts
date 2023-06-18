import express from 'express';
import * as taskController from '../controllers/taskController';
import catchAsync from '../utils/catchAsync';

const router = express.Router();

router.get('/', catchAsync(taskController.getAllTasks)); // <-- Wrap route handlers

router.get('/:taskId', catchAsync(taskController.getTaskById)); // <-- Wrap route handlers

router.post('/', catchAsync(taskController.createTask)); // <-- Wrap route handlers

router.put('/:taskId', catchAsync(taskController.updateTask)); // <-- Wrap route handlers

router.delete('/:taskId', catchAsync(taskController.deleteTask)); // <-- Wrap route handlers

router.put('/:taskId/assignTask', catchAsync(taskController.assignTaskToStaff)); // <-- Wrap route handlers
export default router;
