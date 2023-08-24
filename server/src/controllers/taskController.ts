import { NextFunction, Request, Response } from 'express';
import { TaskService } from '../services/taskService';
import AppError from '../utils/AppError';

const taskService = new TaskService();

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks).end();
    return;
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await taskService.getTaskById(req.params.taskId);
    if (!task) {
      throw new AppError('No task found with that ID', 404);
    }

    res.json(task).end();
    return;
  } catch (error) {
    next(error);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task).end();
    return;
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await taskService.updateTask(
      req.params.taskId,
      req.body.staffId,
    );
    res.status(201).json(task).end();
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await taskService.deleteTask(req.params.taskId);
    if (!task) {
      throw new AppError('Task not found.', 404);
    }
    res.json(task).end();
    return;
  } catch (error) {
    next(error);
  }
};

export const assignTaskToStaff = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await taskService.assignTaskToStaff(
      req.params.taskId,
      req.body.staffId,
    );
    if (!task) {
      throw new AppError('Task not found.', 404);
    }
    res.json(task).end();
    return;
  } catch (error) {
    next(error);
  }
};

export const removeStaffFromTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const task = await taskService.removeStaffFromTask(req.params.taskId);
    if (!task) {
      throw new AppError('Task not found.', 404);
    }
    res.status(201).json(task).end();
    return;
  } catch (error) {
    next(error);
  }
};
