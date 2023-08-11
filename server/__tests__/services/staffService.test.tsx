import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { StaffService } from '../../src/services/staffService';

import { Expertise, IStaff, IStaffData, Role } from '../../src/types/types';
import { getAllStaff } from '../../src/controllers/staffController';

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

const staffMembers: IStaffData[] = [
  {
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
  },
  {
    name: 'Test2',
    avatarUrl: 'https://test2.com',
    role: Role.FRONTEND_DEV,
    expertise: Expertise.JAVASCRIPT,
    ambition: 70,
    loyalty: 70,
    skillLevel: 70,
    resilience: 70,
    adaptability: 70,
    morale: 70,
    currentTask: null,
    availability: true,
    salary: 90000,
    satisfaction: 90,
  },
];

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

  beforeEach(async () => {
    staffMembers.map(async (staff) => {
      void (await staffService.createStaff(staff));
    });
  });

  // afterEach();

  it('should create a new staff member', async () => {
    const staff = await staffService.createStaff(staffData);
    expect(staff.name).toBe(staffData.name);
    expect(staff.avatarUrl).toBe(staffData.avatarUrl);
    expect(staff.role).toBe(staffData.role);
    expect(staff.expertise).toBe(staffData.expertise);
    expect(staff.ambition).toBe(staffData.ambition);
    expect(staff.loyalty).toBe(staffData.loyalty);
    expect(staff.skillLevel).toBe(staffData.skillLevel);
    expect(staff.resilience).toBe(staffData.resilience);
    expect(staff.adaptability).toBe(staffData.adaptability);
    expect(staff.morale).toBe(staffData.morale);
    expect(staff.currentTask).toBe(staffData.availability);
    expect(staff.salary).toBe(staffData.satisfaction);
  });

  it('should get all the staff', async () => {
    void (await staffService.createStaff(staffMembers[0]));
    void (await staffService.createStaff(staffMembers[1]));
    const allStaff = await staffService.getAllStaff();

    console.log(allStaff);

    expect(allStaff.length).toBe(staffMembers.length);
  });
});
