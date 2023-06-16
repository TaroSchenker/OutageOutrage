import { Request, Response } from "express";
import { StaffService } from "../services/staffService";

const staffService = new StaffService();

export const getAllStaff = async (req: Request, res: Response) => {
  const allStaff = await staffService.getAllStaff();
  return res.json(allStaff);
};

export const getStaffById = async (req: Request, res: Response) => {
  const staff = await staffService.getStaffById(req.params.id);
  if (!staff) {
    return res.status(404).json({ message: "Staff member not found" });
  }
  return res.json(staff);
};

export const createStaff = async (req: Request, res: Response) => {
  const staff = await staffService.createStaff(req.body);
  return res.status(201).json(staff);
};

export const updateStaff = async (req: Request, res: Response) => {
  const staff = await staffService.updateStaff(req.params.id, req.body);
};

export const assignTask = async (req: Request, res: Response) => {
  const staff = await staffService.assignTask(req.params.id, req.params.taskId);
  return res.status(201).json(staff);
};

export const updateMorale = async (req: Request, res: Response) => {
  const staff = await staffService.updateMorale(
    req.params.id,
    req.body.newMorale
  );
  return res.status(201).json(staff);
};
