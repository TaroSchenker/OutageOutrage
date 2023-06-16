import { StaffModel } from '../../src/models/Staff';
// import { StaffService } from "../../src/services/staffService";
import { IStaff, Role } from '../../src/types/types';
import mongoose from 'mongoose';

const staffMembers: Array<Partial<IStaff>> = [
  {
    _id: new mongoose.Types.ObjectId().toHexString(),
    name: 'John Doe',
    role: Role.BACKEND_DEV,
    expertise: 'Node.js',
    ambition: 7,
    loyalty: 8,
    skillLevel: 9,
    resilience: 7,
    adaptability: 8,
    morale: 9,
    currentTask: null,
  },
];

describe('StaffService', () => {
  // let staffService: StaffService;
  let mockSave: jest.Mock;

  beforeEach(() => {
    mockSave = jest.fn();
    jest.spyOn(StaffModel.prototype, 'save').mockImplementation(mockSave);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    // jest.resetModules();
  });

  // afterEach(async () => {
  //   await StaffModel.deleteMany({}).exec();
  // });

  test('should get all staff members', async () => {
    jest.spyOn(StaffModel, 'find').mockReturnValueOnce({
      exec: jest.fn().mockResolvedValueOnce(staffMembers),
    } as any);

    const { StaffService } = require('../../src/services/staffService');
    const staffService = new StaffService();
    const result = await staffService.getAllStaff();

    expect(result).toEqual(staffMembers);
  });

  test('should get a staff member by ID', async () => {
    const mockId = staffMembers[0]._id;
    jest
      .spyOn(StaffModel, 'findById')
      .mockReturnValueOnce(staffMembers[0] as any);

    const { StaffService } = require('../../src/services/staffService');
    const staffService = new StaffService();

    const result = await staffService.getStaffById(mockId);
    console.log('result', result);
    expect(result).toEqual(staffMembers[0]);
  });

  test.todo('should create a new staff member');
  test.todo('should update a staff member');
  test.todo('should delete a staff member');
  test.todo('assign a task to a staff member');
  test.todo('should update staff morale');
});
