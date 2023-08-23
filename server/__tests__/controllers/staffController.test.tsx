import request from 'supertest';
import { StaffService } from '../../src/services/staffService';
import { staff } from '../../src/config/initialData/staff';
jest.mock('../../src/config/db', () => {
  return jest.fn(); // Just return a mock function to prevent the real connection
});

import app from '../../src/app';

// Mock the entire StaffService module
// jest.mock('../../src/services/staffService', () => {
//   return {
//     StaffService: jest.fn().mockImplementation(() => {
//       return {
//         getAllStaff: jest.fn().mockResolvedValue(staff),
//       };
//     }),
//   };
// });
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
});
