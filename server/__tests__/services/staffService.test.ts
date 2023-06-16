import { StaffModel } from "../../src/models/Staff";
import { StaffService } from "../../src/services/staffService";
import { IStaff } from "../../src/types/types";
import mongoose from "mongoose";

 const staffMembers: IStaff[] = [
      {
        _id: new mongoose.Types.ObjectId().toHexString(),
        name: 'John Doe',
        role: 'Backend Developer',
        expertise: 'Node.js',
        ambition: 7,
        loyalty: 8,
        skillLevel: 9,
        resilience: 7,
        adaptability: 8,
        morale: 9,
        currentTask: null
      } as IStaff,
    ];

describe("StaffService", () => {
  let staffService: StaffService;

  beforeEach(() => {
    staffService = new StaffService();
   
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should get all staff members", async () => {
   

    jest.spyOn(StaffModel, "find").mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(staffMembers),
    } as any);

    const result = await staffService.getAllStaff();

    expect(result).toEqual(staffMembers);
  });

  test("should get a staff member by ID", async () => {
    jest.spyOn(StaffModel, "findById").mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(staffMembers),
    } as any);

    const result = await staffService.getStaffById("some-id");

    expect(result).toEqual(staffMembers);
  });

  test.todo("should create a new staff member")
  test.todo("should update a staff member")
  test.todo("should delete a staff member")
  test.todo("assign a task to a staff member")
  test.todo("should update staff morale")
});
