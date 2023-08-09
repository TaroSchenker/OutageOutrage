import { Request, Response } from 'express';
import { StaffService } from '../services/staffService';

const staffService = new StaffService();

export const getAllStaff = async (req: Request, res: Response) => {
  const allStaff = await staffService.getAllStaff();
  return res.json(allStaff);
};

export const getStaffById = async (req: Request, res: Response) => {
  const staff = await staffService.getStaffById(req.params.staffId);
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  return res.json(staff);
};

export const createStaff = async (req: Request, res: Response) => {
  const staff = await staffService.createStaff(req.body);
  return res.status(201).json(staff);
};

export const updateStaff = async (req: Request, res: Response) => {
  const staff = await staffService.updateStaff(req.params.staffId, req.body);
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  return res.json(staff);
};

export const deleteStaff = async (req: Request, res: Response) => {
  const staff = await staffService.deleteStaff(req.params.staffId);
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  return res.json(staff);
};

export const assignTask = async (req: Request, res: Response) => {
  const staff = await staffService.assignTask(
    req.params.staffId,
    req.body.taskId,
  );
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  console.log('assign staff', staff);
  return res.status(201).json(staff);
};

export const updateMorale = async (req: Request, res: Response) => {
  const staff = await staffService.updateMorale(
    req.params.staffId,
    req.body.newMorale,
  );
  return res.status(201).json(staff);
};

export const removeTask = async (req: Request, res: Response) => {
  const staff = await staffService.removeTask(req.params.staffId);
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  return res.status(201).json(staff);
};
