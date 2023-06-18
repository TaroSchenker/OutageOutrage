import { NextFunction, Request, Response } from 'express';
import { TaskService } from '../services/taskService';
import AppError from '../utils/AppError';
import { StaffService } from '../services/staffService';

const taskService = new TaskService();
const staffService = new StaffService();

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tasks = await taskService.getAllTasks();
    return res.json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await taskService.getTaskById(req.params.taskId);
    if (!task) {
      throw new AppError('No task found with that ID', 404);
    }

    return res.json(task);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await taskService.createTask(req.body);
    return res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log('updateTask Activated', req.body.assignedTo);
    const task = await taskService.updateTask(
      req.params.taskId,
      req.body.assignedTo,
    );
    return res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await taskService.deleteTask(req.params.taskId);
    if (!task) {
      throw new AppError('Task not found.', 404);
    }
    return res.json(task);
  } catch (error) {
    next(error);
  }
};

export const assignTaskToStaff = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const assignedTo: string = req.body.assignedTo;
    const staff = await staffService.getStaffById(assignedTo);
    if (!staff) {
      throw new AppError('Staff not found.', 404);
    }

    const task = await taskService.assignTaskToStaff(
      req.params.taskId,
      assignedTo,
    );

    if (!task) {
      throw new AppError('Task not found.', 404);
    }

    return res.json(task);
  } catch (error) {
    next(error);
  }
};
