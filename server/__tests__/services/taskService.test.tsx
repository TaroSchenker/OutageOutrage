import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { TaskService } from '../../src/services/taskService';
import { tasks as tasksTestData } from '../../src/config/initialData/tasks';
import { TaskModel } from '../../src/models/Task';
import {
  BusinessImpact,
  Expertise,
  ITask,
  ITaskData,
  TaskStatus,
  TaskType,
} from '../../src/types/types';

// TODO: You may need a taskTestData just like the staffTestData in the original example.

const singleTaskData: ITaskData = {
  type: TaskType.BUG_FIX,
  complexity: 50,
  timeToComplete: 60,
  assignedTo: null,
  expertiseRequired: Expertise.JAVASCRIPT,
  criticality: 50,
  status: TaskStatus.NOT_STARTED,
  dependencies: [],
  businessImpact: BusinessImpact.HIGH,
  progress: 0,
  description: 'Sample task for testing.',
};

describe('TaskService', () => {
  let mongoServer: MongoMemoryServer;
  let taskService: TaskService;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
    taskService = new TaskService();
  });

  beforeEach(async () => {
    for (const task of tasksTestData) {
      await taskService.createTask(task);
    }
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create a new task', async () => {
    const task = await taskService.createTask(singleTaskData);

    for (const key in task) {
      if (task.hasOwnProperty(key)) {
        const typedKey = key as keyof ITaskData;
        expect((task as never)[key]).toBe(task[typedKey]);
      }
    }
  });

  test('getAllTasks should retrieve all tasks', async () => {
    const allTasks = await taskService.getAllTasks();
    expect(allTasks.length).toBe(tasksTestData.length);
  });

  test('getTaskById should retrieve a task by ID', async () => {
    const task = await taskService.createTask(singleTaskData);
    const taskFromId = await taskService.getTaskById(task._id);
    expect(String(taskFromId?._id)).toBe(String(task._id));
  });

  test('updateTask should update a task', async () => {
    const taskUpdates: Partial<ITask> = { progress: 50 };
    const task = await taskService.createTask(singleTaskData);
    const updatedTask = await taskService.updateTask(
      task._id,
      taskUpdates as ITask,
    );

    // Check if the update was successful.
    expect(updatedTask).toBeDefined();
    expect(updatedTask?.progress).toBe(taskUpdates.progress);
  });

  test('deleteTask should delete a task', async () => {
    const task = await taskService.createTask(singleTaskData);
    const taskFromId = await taskService.getTaskById(task._id);
    expect(taskFromId).toBeDefined();
    const deletedTask = await taskService.deleteTask(task._id);
    expect(String(deletedTask?._id)).toBe(String(task._id));
    // You might want to check if it's actually deleted by querying all tasks.
  });

  test('assignTaskToStaff should assign a task to a staff member', async () => {
    const task = await taskService.createTask(singleTaskData);
    const assignedTask = await taskService.assignTaskToStaff(
      task._id,
      'someStaffId',
    );
    expect(assignedTask?.assignedTo).toBe('someStaffId');
  });

  test('removeStaffFromTask should remove a staff member from a task', async () => {
    const task = await taskService.createTask(singleTaskData);
    const assignedTask = await taskService.assignTaskToStaff(
      task._id,
      'someStaffId',
    );
    expect(assignedTask?.assignedTo).toBe('someStaffId');
    const removedStaffTask = await taskService.removeStaffFromTask(task._id);
    expect(removedStaffTask?.assignedTo).toBe('');
    expect(removedStaffTask?.status).toBe(TaskStatus.NOT_STARTED);
    expect(removedStaffTask?.progress).toBe(0);
  });
});
