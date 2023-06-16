import { TaskModel } from '../models/Task';
import { ITask } from '../types/types';

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
  createTask(taskData: Partial<ITask>): Promise<ITask> {
    const task = new TaskModel(taskData);
    return task.save();
  }

  // Update a task
  updateTask(id: string, taskData: Partial<ITask>): Promise<ITask | null> {
    return TaskModel.findByIdAndUpdate(id, taskData, { new: true }).exec();
  }

  // Delete a task
  deleteTask(id: string): Promise<ITask | null> {
    return TaskModel.findByIdAndDelete(id).exec();
  }

  // Assign a task to a staff member
  assignTaskToStaff(taskId: string, staffId: string): Promise<ITask | null> {
    return TaskModel.findByIdAndUpdate(
      taskId,
      { assignedTo: staffId },
      { new: true },
    ).exec();
  }
}
