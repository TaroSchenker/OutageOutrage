import { Request, Response } from 'express';
import { TaskService } from '../services/taskService';


const taskService = new TaskService();

export const getAllTasks = async (req: Request, res: Response) => {
    const tasks = await taskService.getAllTasks();
    return res.json(tasks);
};

export const getTaskById = async (req: Request, res: Response) => {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
    }
    return res.json(task);
};

export const createTask = async (req: Request, res: Response) => {
    const task = await taskService.createTask(req.body);
    return res.status(201).json(task);
};

export const updateTask = async (req: Request, res: Response) => {
    const task = await taskService.updateTask(req.params.id, req.body);
    if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
    }
    return res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
    const task = await taskService.deleteTask(req.params.id);
    if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
    }
    return res.json(task);
};

export const assignTaskToStaff = async (req: Request, res: Response) => {
    const task = await taskService.assignTaskToStaff(req.params.id, req.body.staffId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
    }
    return res.json(task);
};
