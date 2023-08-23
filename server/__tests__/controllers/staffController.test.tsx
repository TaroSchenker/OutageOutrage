import request from 'supertest';
import { StaffService } from '../../src/services/staffService';
import { staff } from '../../src/config/initialData/staff';
jest.mock('../../src/config/db', () => {
  return jest.fn(); // Just return a mock function to prevent the real connection
});

import app from '../../src/app';

const mockStaffData = { name: 'John Doe', role: 'Developer' };

const mockStaff = { _id: '12345', name: 'John Doe' };
const updatedStaff = { _id: '12345', name: 'John Smith' };
const mockStaffId = '12345';
const mockTaskId = '98765';
const mockStaffWithTask = {
  _id: mockStaffId,
  task: mockTaskId,
  name: 'John',
  role: 'Developer',
};

jest.mock('../../src/services/staffService', () => {
  return {
    StaffService: jest.fn().mockImplementation(() => {
      return {
        assignTask: jest.fn((staffId, taskId) => {
          if (staffId === mockStaffId) {
            return Promise.resolve({
              ...mockStaffWithTask,
              currentTask: taskId,
              availability: false,
            });
          }
          return Promise.resolve(null);
        }),
        updateStaff: jest.fn((id) => {
          if (id === mockStaff._id) {
            return Promise.resolve(updatedStaff);
          }
          return Promise.resolve(null);
        }),
        getAllStaff: jest.fn().mockResolvedValue(staff),
        getStaffById: jest.fn((id) => {
          if (id === mockStaff._id) {
            return Promise.resolve(mockStaff);
          }
          return Promise.resolve(null);
        }),
        createStaff: jest.fn((data) => {
          if (data.name === mockStaffData.name) {
            return Promise.resolve(mockStaff);
          }
          return Promise.resolve(null);
        }),
      };
    }),
  };
});
describe('Staff Controller', () => {
  afterEach(async () => {
    jest.clearAllMocks();
  });

  test('should get all staff', async () => {
    StaffService.prototype.getAllStaff = jest.fn().mockResolvedValue(staff);
    const res = await request(app).get('/api/staff');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(staff);
  });

  test('should get staff by valid ID', async () => {
    const res = await request(app).get(`/api/staff/${mockStaff._id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockStaff);
  });

  test('should return 404 for non-existent staff ID', async () => {
    const res = await request(app).get('/api/staff/nonexistantid');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: 'Staff member not found' });
  });

  test('should successfully create a staff member', async () => {
    const res = await request(app).post('/api/staff').send(mockStaffData);
    expect(res.status).toBe(201);
    expect(res.body).toEqual(mockStaff);
  });

  test('should return 422 when staff creation fails', async () => {
    const faultyData = { name: 'Faulty Name', role: 'Faulty Role' };
    const res = await request(app).post('/api/staff').send(faultyData);
    expect(res.status).toBe(422);
    expect(res.body).toEqual({ message: 'Staff member not created' });
  });
  test('should update staff member', async () => {
    const res = await request(app).put(`/api/staff/${mockStaff._id}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(updatedStaff);
  });
  test('should return 404 when staff update failed', async () => {
    const faultyId = 'faultyId'; // This can be any ID you know your mock will not process
    const res = await request(app)
      .put(`/api/staff/${faultyId}`)
      .send({ name: 'Does Not Matter' });
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: 'Staff member not found' });
  });

  it('should successfully assign a task to a staff member', async () => {
    const res = await request(app)
      .put(`/api/staff/${mockStaffId}/assignTask`)
      .send({ taskId: mockTaskId });
    expect(res.status).toBe(201);
    console.log('assign task to staff', res.body);
    expect(res.body).toEqual({
      ...mockStaffWithTask,
      currentTask: mockTaskId,
      availability: false,
    });
  });

  it('should return 404 when assigning a task fails', async () => {
    const faultyId = 'faultyId';
    const res = await request(app)
      .put(`/api/staff/${faultyId}/assignTask`)
      .send({ taskId: mockTaskId });
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ message: 'Staff member not found' });
  });
});
