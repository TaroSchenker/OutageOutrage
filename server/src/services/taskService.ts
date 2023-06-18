import { TaskModel } from '../models/Task';
import { ITask, ITaskData } from '../types/types';
import AppError from '../utils/AppError';

export class TaskService {
  // Retrieve all tasks
  getAllTasks(): Promise<ITask[]> {
    return TaskModel.find({}).exec();
  }

  // Retrieve a task by ID
  getTaskById(id: string): Promise<ITask | null> {
    //Remove .exec() as it breaks the tests.
    //Do we need to remove from all or not?
    // return TaskModel.findById(id).exec()
    return TaskModel.findById(id);
  }

  // Create a new task
  createTask(taskData: ITaskData): Promise<ITask> {
    console.log('*TASK SERVICE*: taskData: ', taskData);
    const task = new TaskModel(taskData);
    console.log('*TASK SERVICE*: new task model: ', task);
    return task.save();
  }

  // Update a task
  updateTask(id: string, taskData: ITask): Promise<ITask | null> {
    return TaskModel.findByIdAndUpdate(id, taskData, { new: true }).exec();
  }

  // Delete a task
  deleteTask(id: string): Promise<ITask | null> {
    return TaskModel.findByIdAndDelete(id).exec();
  }

  // Assign a task to a staff member
  assignTaskToStaff(taskId: string, staffId: string): Promise<ITask | null> {
    console.log('TASK SERVICE -->  staffId', staffId);
    try {
      return TaskModel.findByIdAndUpdate(
        taskId,
        { assignedTo: staffId },
        { new: true },
      );
    } catch (error) {
      console.error('Error updating task:', error);
      throw new AppError('An error occurred while updating the task', 500);
    }
  }
}
