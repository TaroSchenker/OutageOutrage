import { TaskModel } from "../../src/models/Task";
import { ITask, TaskType } from "../../src/types/types";
import mongoose from "mongoose";

const tasks: Array<Partial<ITask>> = [
  {
    _id: new mongoose.Types.ObjectId().toHexString(),
    type: TaskType.NEW_FEATURE,
    complexity: 5,
    timeToComplete: 5,
    assignedTo: "staffMemberAssignment",
    expertiseRequired: "need expertise",
    criticality: 5,
  },
];

describe("TaskService", () => {
  let mockSave: jest.Mock;

  beforeEach(() => {
    mockSave = jest.fn();
    jest.spyOn(TaskModel.prototype, "save").mockImplementation(mockSave);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });


  test("should get all tasks", async () => {
    jest.spyOn(TaskModel, "find").mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(tasks),
    } as any);

    const { TaskService } = require("../../src/services/taskService");
    const taskService = new TaskService();

    const result = await taskService.getAllTasks();

    expect(result).toEqual(tasks);
  });

  test("should get a task by ID", async () => {
    const mockId = tasks[0]._id;

    jest.spyOn(TaskModel, "findById").mockResolvedValueOnce(tasks[0] as any);

    const { TaskService } = require("../../src/services/taskService");
    const taskService = new TaskService();
    
    const result = await taskService.getTaskById(mockId);

    expect(result).toEqual(tasks[0]);
  });

  test("should create a new task", async () => {
    // Arrange: Set the mock save method to resolve to the task.
    mockSave.mockImplementation(() => {
      console.log("save called");
      return Promise.resolve(tasks[0]);
    });

    // Act: Call the method under test.
    const { TaskService } = require("../../src/services/taskService");
    const taskService = new TaskService();
    await taskService.createTask(tasks[0]);

    // Assert: Check if the save method was called.
    expect(mockSave).toHaveBeenCalled();
  });
});
