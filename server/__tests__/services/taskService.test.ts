import { TaskModel } from "../../src/models/Task";
import { TaskService } from "../../src/services/taskService";
import { ITask, TaskType } from "../../src/types/types";
import mongoose from "mongoose";

const tasks: ITask[] = [
  {
    _id: new mongoose.Types.ObjectId().toHexString(),
    type: TaskType.NEW_FEATURE,
    complexity: 
  } as ITask,
];

describe("TaskService", () => {
  let taskService: TaskService;

  beforeEach(() => {
    taskService = new TaskService();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should get all tasks", async () => {
    jest.spyOn(TaskModel, "find").mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(tasks),
    } as any);

    const result = await taskService.getAllTasks();

    expect(result).toEqual(tasks);
  });

  test("should get a task by ID", async () => {
    jest.spyOn(TaskModel, "findById").mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(tasks[0]),
    } as any);

    const result = await taskService.getTaskById("some-id");

    expect(result).toEqual(tasks[0]);
  });

  test.todo("should create a new task");
  test.todo("should update a task");
  test.todo("should delete a task");
  test.todo("should assign a task to a staff member");
});
