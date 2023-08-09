import { TaskModel } from '../models/Task';
import { ITask, ITaskData, TaskStatus } from '../types/types';
import AppError from '../utils/AppError';

export class TaskService {
  // Retrieve all tasks
  getAllTasks(): Promise<ITask[]> {
    return TaskModel.find({});
  }

  // Retrieve a task by ID
  getTaskById(id: string): Promise<ITask | null> {
    return TaskModel.findById(id);
  }

  // Create a new task
  createTask(taskData: ITaskData): Promise<ITask> {
    const task = new TaskModel(taskData);

    return task.save();
  }

  // Update a task
  updateTask(id: string, taskData: ITask): Promise<ITask | null> {
    return TaskModel.findByIdAndUpdate(id, taskData, { new: true });
  }

  // Delete a task
  deleteTask(id: string): Promise<ITask | null> {
    return TaskModel.findByIdAndDelete(id);
  }

  // Assign a task to a staff member
  assignTaskToStaff(taskId: string, staffId: string): Promise<ITask | null> {
    console.log(
      '****Assign task to staff**** TASK / STAFF ID',
      taskId,
      staffId,
    );
    try {
      const updatedTask = TaskModel.findByIdAndUpdate(
        taskId,
        { assignedTo: staffId },
        { new: true },
      );
      return updatedTask;
    } catch (error) {
      console.error('Error updating task:', error);
      throw new AppError('An error occurred while updating the task', 500);
    }
  }

  // Remove a task from a staff member
  removeStaffFromTask(taskId: string): Promise<ITask | null> {
    console.log('removeStaffFromTask');
    return TaskModel.findByIdAndUpdate(
      taskId,
      { assignedTo: '', status: TaskStatus.NOT_STARTED, progress: 0 },
      { new: true },
    );
  }
}
