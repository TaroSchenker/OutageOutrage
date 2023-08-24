import { Request, Response } from 'express';
import { StaffService } from '../services/staffService';

const staffService = new StaffService();

export const getAllStaff = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const allStaff = await staffService.getAllStaff();
  if (!allStaff) {
    res.status(404).json({ message: 'Error getting all staff' }).end();
    return;
  }
  res.json(allStaff).end();
  return;
};

export const getStaffById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const staff = await staffService.getStaffById(req.params.staffId);
  if (!staff) {
    res.status(404).json({ message: 'Staff member not found' }).end();
    return;
  }
  res.json(staff).end();
  return;
};

export const createStaff = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const staff = await staffService.createStaff(req.body);
  if (!staff) {
    res.status(422).json({ message: 'Staff member not created' }).end();
    return;
  }
  res.status(201).json(staff).end();
  return;
};

export const updateStaff = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const staff = await staffService.updateStaff(req.params.staffId, req.body);
  if (!staff) {
    res.status(404).json({ message: 'Staff member not found' }).end();
    return;
  }
  res.status(200).json(staff).end();
  return;
};

//Delete Staff Not currently in use in UI
export const deleteStaff = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const staff = await staffService.deleteStaff(req.params.staffId);
  if (!staff) {
    res.status(404).json({ message: 'Staff member not found' }).end();
    return;
  }
  res.json(staff);
};

export const assignTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const staff = await staffService.assignTask(
    req.params.staffId,
    req.body.taskId,
  );
  if (!staff) {
    res.status(404).json({ message: 'Staff member not found' }).end();
    return;
  }
  res.status(201).json(staff).end();
  return;
};

export const updateMorale = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const staff = await staffService.updateMorale(
    req.params.staffId,
    req.body.newMorale,
  );
  if (!staff) {
    res.status(404).json({ message: 'Staff member not found' }).end();
    return;
  }
  res.status(201).json(staff).end();
  return;
};

export const removeTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const staff = await staffService.removeTask(req.params.staffId);
  if (!staff) {
    res.status(404).json({ message: 'Staff member not found' }).end();
    return;
  }
  res.status(201).json(staff).end();
  return;
};
