import { TaskModel } from "../../src/models/Task";
// import { TaskService } from "../../src/services/taskService";
import { ITask, TaskType } from "../../src/types/types";
import mongoose from "mongoose";

const tasks: Array<Partial<ITask>> = [
  {
    _id: new mongoose.Types.ObjectId().toHexString(),
    type: TaskType.NEW_FEATURE,
    complexity: 6,
    timeToComplete: 8,
    assignedTo: "staffMemberAssignment",
    expertiseRequired: "need expertise",
    criticality: 3,
  },
];

describe("TaskService", () => {
  // let taskService: TaskService;

  // beforeEach(() => {
  //   taskService = new TaskService();
  // });

  afterEach(() => {
    jest.restoreAllMocks();
  });

//   test("should get all tasks", async () => {
//     jest.spyOn(TaskModel, "find").mockReturnValueOnce({
//       exec: jest.fn().mockResolvedValueOnce(tasks),
//     } as any);

//     const { TaskService } = require("../../src/services/taskService");
//     const taskService = new TaskService();

//     const result = await taskService.getAllTasks();

//     expect(result).toEqual(tasks);
//   });

  //   test("should get a task by ID", async () => {
  //     jest.spyOn(TaskModel, "findById").mockReturnValueOnce({
  //       exec: jest.fn().mockResolvedValueOnce(tasks[0]),
  //     } as any);

  //     const result = await taskService.getTaskById("some-id");

  //     expect(result).toEqual(tasks[0]);
  //   });

  test("should create a new task", async () => {
    // Mock implementation of TaskModel.save
    const mockSave = jest.fn(() =>
      Promise.resolve({ ...tasks[0], _id: "some-id" })
    );

    // Mock TaskModel to return an object with the mocked save function
    const mockTaskModel = jest
      .fn()
      .mockImplementation(() => ({ save: mockSave }));

    jest.mock("../../src/models/Task", () => ({
      TaskModel: mockTaskModel,
    }));

    const { TaskService } = require("../../src/services/taskService");
    const taskService = new TaskService();

    await taskService.createTask(tasks[0]);
    expect(mockTaskModel).toHaveBeenCalled();
    expect(mockSave).toHaveBeenCalled();
  });
});
