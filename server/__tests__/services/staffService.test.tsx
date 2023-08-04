import { StaffService } from '../../src/services/staffService';
import { StaffModel } from '../../src/models/Staff';
import { Expertise, IStaff, IStaffData, Role } from '../../src/types/types';
import { mockDeep } from 'jest-mock-extended';

// We create a deep mock, as we're dealing wtesth complex objects
jest.mock('../../src/models/Staff');
const mockedStaffModel = mockDeep<IStaff>();
(StaffModel as unknown as jest.Mock).mockReturnValue(mockedStaffModel);

//Mock staff data
const mockStaffData: IStaffData = {
  name: 'API Andy',
  avatarUrl:
    'https://raw.gtesthubusercontent.com/TaroSchenker/OutageOutrage/main/client/src/assets/images/staff/BackendDev.png',
  role: Role.BACKEND_DEV,
  expertise: Expertise.JAVA,
  ambition: 10,
  loyalty: 60,
  skillLevel: 90,
  resilience: 20,
  adaptability: 20,
  morale: 20,
  currentTask: null,
  availability: true,
  salary: 70000,
  satisfaction: 50,
};

describe('StaffService', () => {
  let service: StaffService;

  beforeEach(() => {
    service = new StaffService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a staff member', async () => {
    await service.createStaff(mockStaffData);
    expect(mockedStaffModel.save).toBeCalled();
  });

  test('should fetch a staff member by id', async () => {
    // Implement test for getStaffById here
  });

  test('should create a new staff member', async () => {
    // Implement test for createStaff here
  });

  test('should update a staff member', async () => {
    // Implement test for updateStaff here
  });

  test('should delete a staff member', async () => {
    // Implement test for deleteStaff here
  });

  test('should assign a task to a staff member', async () => {
    // Implement test for assignTask here
  });

  test('should remove a task from a staff member', async () => {
    // Implement test for RemoveTask here
  });

  test('should update the morale of a staff member', async () => {
    // Implement test for updateMorale here
  });

  test('should calculate the total cost of staff members', async () => {
    // Implement test for calculateTotalStaffCost here
  });

  test('should calculate the total morale of staff members', async () => {
    // Implement test for calculateTotalStaffMorale here
  });
});
