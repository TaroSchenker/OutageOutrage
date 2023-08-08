import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { StaffService } from '../../src/services/staffService';

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
    const staffData: IStaffData = {
      name: 'Test',
      avatarUrl: 'https://test.com',
      role: Role.BACKEND_DEV,
      expertise: Expertise.JAVA,
      ambition: 80,
      loyalty: 80,
      skillLevel: 80,
      resilience: 80,
      adaptability: 80,
      morale: 80,
      currentTask: null,
      availability: true,
      salary: 50000,
      satisfaction: 100,
    };

    const staff = await staffService.createStaff(staffData);
    expect(staff.name).toBe(staffData.name);
    expect(staff.avatarUrl).toBe(staffData.avatarUrl);
    expect(staff.role).toBe(staffData.role);
    expect(staff.expertise).toBe(staffData.expertise);
  });

  // TODO: Other tests for get, update, delete operations
});
