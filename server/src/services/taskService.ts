import { staff } from '../config/initialData/staff';
import { StaffModel } from '../models/Staff';
import { TaskModel } from '../models/Task';
import { IStaff, ITask, ITaskData } from '../types/types';
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
      const assignedStaff = StaffModel.findByIdAndUpdate(
        staffId,
        { currentTask: taskId },
        { new: true },
      );

      // console.log('updatedstaff:', assignedStaff);
      return updatedTask;
    } catch (error) {
      console.error('Error updating task:', error);
      throw new AppError('An error occurred while updating the task', 500);
    }
  }
}
