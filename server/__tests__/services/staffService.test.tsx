import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { StaffService } from '../../src/services/staffService';
import { staff as staffTestData } from '../../src/config/initialData/staff';
import { Expertise, IStaff, IStaffData, Role } from '../../src/types/types';

const singleStaffMember = {
  name: 'New Staff',
  avatarUrl:
    'https://raw.githubusercontent.com/TaroSchenker/OutageOutrage/main/client/src/assets/images/staff/BackendDev.png',
  role: Role.BACKEND_DEV,
  expertise: Expertise.JAVA,
  ambition: 20,
  loyalty: 20,
  skillLevel: 20,
  resilience: 20,
  adaptability: 20,
  morale: 20,
  currentTask: null,
  availability: true,
  salary: 10000,
  satisfaction: 20,
};
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

  beforeEach(async () => {
    for (const staff of staffTestData) {
      await staffService.createStaff(staff);
    }
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create a new staff member', async () => {
    const staff = await staffService.createStaff(singleStaffMember);

    for (const key in staff) {
      if (staff.hasOwnProperty(key)) {
        const typedKey = key as keyof IStaffData;
        expect((staff as never)[key]).toBe(staff[typedKey]);
      }
    }
  });

  test('getAllStaff should retrieve all staff members', async () => {
    const allStaff = await staffService.getAllStaff();
    console.log('allStaff', allStaff);
    expect(allStaff.length).toBe(staffTestData.length);
  });

  test('getStaffById should retrieve a staff member by ID', async () => {
    const staff = await staffService.createStaff(singleStaffMember);
    const staffFromId = await staffService.getStaffById(staff._id);
    expect(String(staffFromId?._id)).toBe(String(staff._id));
  });

  test('updateStaff should update a staff member', async () => {
    const staffUpdates: Partial<IStaff> = { availability: false };
    const staff = await staffService.createStaff(singleStaffMember);
    const updatedStaff = await staffService.updateStaff(
      staff._id,
      staffUpdates,
    );

    // Check if the update was successful.
    expect(updatedStaff).toBeDefined();
    expect(updatedStaff?.availability).toBe(staffUpdates.availability);
  });

  test('deleteStaff should delete a staff member', async () => {
    const staff = await staffService.createStaff(singleStaffMember);
    const staffFromId = await staffService.getStaffById(staff._id);
    expect(staffFromId).toBeDefined();
    const deletedStaff = await staffService.deleteStaff(staff._id);
    expect(String(deletedStaff?._id)).toBe(String(staff._id));
    const allStaff = await staffService.getAllStaff();
    expect(allStaff.length).toBe(staffTestData.length);
  });

  test('assignTask should assign a task to a staff member', async () => {
    const staff = await staffService.createStaff(singleStaffMember);
    const assignedStaff = await staffService.assignTask(staff._id, 'taskId');
    expect(assignedStaff?.availability).toBe(false);
    expect(assignedStaff?.currentTask).toBe('taskId');
  });

  test('removeTask should remove a task from a staff member', async () => {
    const staff = await staffService.createStaff(singleStaffMember);
    const assignedStaff = await staffService.assignTask(staff._id, 'taskId');
    expect(assignedStaff?.availability).toBe(false);
    expect(assignedStaff?.currentTask).toBe('taskId');
    const removeTask = await staffService.removeTask(staff._id);
    expect(removeTask?.availability).toBe(true);
    expect(removeTask?.currentTask).toBe('');
  });

  test('updateMorale should update staff morale', async () => {
    const staff = await staffService.createStaff(singleStaffMember);
    const updatedMoral = await staffService.updateMorale(staff._id, 50);
    expect(updatedMoral?.morale).toBe(50);
  });

  test('calculateTotalStaffCost should calculate the total cost of given staff members', () => {
    // TODO: Implement the test logic here
  });

  test('calculateTotalStaffMorale should calculate the average morale of given staff members', async () => {
    const allStaffIds: string[] = (await staffService.getAllStaff()).map(
      (staff) => staff._id.toString(),
    );

    const allStaffMorales: number = (await staffService.getAllStaff())
      .map((staff) => staff.morale)
      .reduce((acc, cv) => acc + cv, 0);

    const totalMorale = await staffService.calculateTotalStaffMorale(
      allStaffIds,
    );

    expect(totalMorale).toBeCloseTo(allStaffMorales); // Using toBeCloseTo if dealing with floating point numbers.
  });

  // TODO: Other tests for get, update, delete operations
});
