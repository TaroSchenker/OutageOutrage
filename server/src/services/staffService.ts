import { StaffModel } from '../models/Staff';
import { IStaff, IStaffData } from '../types/types';

export class StaffService {
  // Retrieve all staff members
  getAllStaff(): Promise<IStaff[]> {
    return StaffModel.find({}).exec();
  }

  // Retrieve a staff member by ID
  getStaffById(id: string): Promise<IStaff | null> {
    return StaffModel.findById(id);
  }

  // Create a new staff member
  createStaff(staffData: IStaffData): Promise<IStaff> {
    const staff = new StaffModel(staffData);
    console.log('*STAFF SERVICE*: <Created>staffData: ', staffData);
    return staff.save();
  }

  // Update a staff member
  updateStaff(id: string, staffData: Partial<IStaff>): Promise<IStaff | null> {
    return StaffModel.findByIdAndUpdate(id, staffData, { new: true }).exec();
  }

  // Delete a staff member
  deleteStaff(id: string): Promise<IStaff | null> {
    return StaffModel.findByIdAndDelete(id).exec();
  }

  // Assign a task to a staff member
  assignTask(staffId: string, taskId: string): Promise<IStaff | null> {
    return StaffModel.findByIdAndUpdate(
      staffId,
      { currentTask: taskId },
      { new: true },
    ).exec();
  }

  // Update staff morale
  updateMorale(id: string, newMorale: number): Promise<IStaff | null> {
    return StaffModel.findByIdAndUpdate(
      id,
      { morale: newMorale },
      { new: true },
    ).exec();
  }
}
