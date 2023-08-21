import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { StaffService } from '../../src/services/staffService';
import { staff as staffTestData } from '../../src/config/initialData/staff';
import { Expertise, IStaffData, Role } from '../../src/types/types';

describe('StaffService', () => {
  // let con: MongoClient;
  let mongoServer: MongoMemoryServer;
  let staffService: StaffService;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
    staffService = new StaffService();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create a new staff member', async () => {
    const staff = await staffService.createStaff(staffTestData[0]);

    for (const key in staff) {
      if (staff.hasOwnProperty(key)) {
        const typedKey = key as keyof IStaffData;
        expect((staff as any)[key]).toBe(staff[typedKey]);
      }
    }
  });

  test('getAllStaff should retrieve all staff members', () => {
    // TODO: Implement the test logic here
  });

  test('getStaffById should retrieve a staff member by ID', () => {
    // TODO: Implement the test logic here
  });

  test('createStaff should create a new staff member', () => {
    // TODO: Implement the test logic here
  });

  test('updateStaff should update a staff member', () => {
    // TODO: Implement the test logic here
  });

  test('deleteStaff should delete a staff member', () => {
    // TODO: Implement the test logic here
  });

  test('assignTask should assign a task to a staff member', () => {
    // TODO: Implement the test logic here
  });

  test('removeTask should remove a task from a staff member', () => {
    // TODO: Implement the test logic here
  });

  test('updateMorale should update staff morale', () => {
    // TODO: Implement the test logic here
  });

  test('calculateTotalStaffCost should calculate the total cost of given staff members', () => {
    // TODO: Implement the test logic here
  });

  test('calculateTotalStaffMorale should calculate the average morale of given staff members', () => {
    // TODO: Implement the test logic here
  });

  // TODO: Other tests for get, update, delete operations
});
