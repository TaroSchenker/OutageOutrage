import request from 'supertest';
import { StaffService } from '../../src/services/staffService';
import { staff } from '../../src/config/initialData/staff';
jest.mock('../../src/config/db', () => {
  return jest.fn(); // Just return a mock function to prevent the real connection
});

import app from '../../src/app';

const mockStaffData = { name: 'John Doe', role: 'Developer' };

const mockStaff = { _id: '12345', name: 'John Doe' };

jest.mock('../../src/services/staffService', () => {
  return {
    StaffService: jest.fn().mockImplementation(() => {
      return {
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
});
