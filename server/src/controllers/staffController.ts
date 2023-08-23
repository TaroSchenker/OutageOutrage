import { Request, Response } from 'express';
import { StaffService } from '../services/staffService';

const staffService = new StaffService();

export const getAllStaff = async (req: Request, res: Response) => {
  const allStaff = await staffService.getAllStaff();
  if (!allStaff) {
    return res.status(404).json({ message: 'Error getting all staff' });
  }
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
  if (!staff) {
    return res.status(422).json({ message: 'Staff member not created' });
  }
  return res.status(201).json(staff);
};

export const updateStaff = async (req: Request, res: Response) => {
  const staff = await staffService.updateStaff(req.params.staffId, req.body);
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  return res.status(200).json(staff);
};

//Delete Staff Not currently in use in UI
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
  return res.status(201).json(staff);
};

export const updateMorale = async (req: Request, res: Response) => {
  const staff = await staffService.updateMorale(
    req.params.staffId,
    req.body.newMorale,
  );
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  return res.status(201).json(staff);
};

export const removeTask = async (req: Request, res: Response) => {
  const staff = await staffService.removeTask(req.params.staffId);
  if (!staff) {
    return res.status(404).json({ message: 'Staff member not found' });
  }
  return res.status(201).json(staff);
};
