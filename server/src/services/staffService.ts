import { StaffModel } from '../models/Staff';
import { IStaff, IStaffData } from '../types/types';

export class StaffService {
  // Retrieve all staff members
  getAllStaff(): Promise<IStaff[]> {
    return StaffModel.find({});
  }

  // Retrieve a staff member by ID
  getStaffById(id: string): Promise<IStaff | null> {
    return StaffModel.findById(id);
  }

  // Create a new staff member
  createStaff(staffData: IStaffData): Promise<IStaff> {
    const staff = new StaffModel(staffData);
    return staff.save();
  }

  // Update a staff member
  updateStaff(id: string, staffData: Partial<IStaff>): Promise<IStaff | null> {
    return StaffModel.findByIdAndUpdate(id, staffData, { new: true });
  }

  // Delete a staff member
  deleteStaff(id: string): Promise<IStaff | null> {
    return StaffModel.findByIdAndDelete(id);
  }

  // Assign a task to a staff member
  assignTask(staffId: string, taskId: string): Promise<IStaff | null> {
    return StaffModel.findByIdAndUpdate(
      staffId,
      { currentTask: taskId, availability: false },
      { new: true },
    );
  }

  // Delete a task to a staff member
  removeTask(staffId: string): Promise<IStaff | null> {
    return StaffModel.findByIdAndUpdate(
      staffId,
      {
        currentTask: '',
        availability: true,
      },
      { new: true },
    );
  }

  // Update staff morale
  updateMorale(staffId: string, newMorale: number): Promise<IStaff | null> {
    return StaffModel.findByIdAndUpdate(
      staffId,
      { morale: newMorale },
      { new: true },
    );
  }

  async calculateTotalStaffCost(staffIds: string[]): Promise<number> {
    const staffMembers = await StaffModel.find({
      _id: { $in: staffIds },
    });

    let totalCost = 0;
    staffMembers.forEach((staff) => {
      totalCost += staff.salary;
    });

    return totalCost;
  }

  async calculateTotalStaffMorale(staffIds: string[]): Promise<number> {
    const staffMembers = await StaffModel.find({
      _id: { $in: staffIds },
    });
    if (staffMembers.length === 0) return 0;
    let totalMorale = 0;
    staffMembers.forEach((staff) => {
      totalMorale += staff.morale;
    });
    return totalMorale;
  }
}
