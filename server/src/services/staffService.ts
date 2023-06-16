import { Staff } from '../models/Staff';
import { IStaff } from '../types/types';

export class StaffService {
  // Retrieve all staff members
  getAllStaff(): Promise<IStaff[]> {
    return Staff.find({}).exec();
  }

  // Retrieve a staff member by ID
  getStaffById(id: string): Promise<IStaff | null> {
    return Staff.findById(id).exec();
  }

  // Create a new staff member
  createStaff(staffData: Partial<IStaff>): Promise<IStaff> {
    const staff = new Staff(staffData);
    return staff.save();
  }

  // Update a staff member
  updateStaff(id: string, staffData: Partial<IStaff>): Promise<IStaff | null> {
    return Staff.findByIdAndUpdate(id, staffData, { new: true }).exec();
  }

  // Delete a staff member
  deleteStaff(id: string): Promise<IStaff | null> {
    return Staff.findByIdAndDelete(id).exec();
  }

  // Assign a task to a staff member
  assignTask(staffId: string, taskId: string): Promise<IStaff | null> {
    return Staff.findByIdAndUpdate(staffId, { currentTask: taskId }, { new: true }).exec();
  }

  // Update staff morale
  updateMorale(id: string, newMorale: number): Promise<IStaff | null> {
    return Staff.findByIdAndUpdate(id, { morale: newMorale }, { new: true }).exec();
  }
}
