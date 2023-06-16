import express from "express";

import * as staffController from "../controllers/staffController";

const router = express.Router();
router.get("/staff", staffController.getAllStaff);
router.get("/staff/:staffId", staffController.getStaffById);
router.post("/staff", staffController.createStaff);
router.put("/staff/:staffId", staffController.updateStaff);
router.delete("/staff/:staffId", staffController.deleteStaff);
router.put("/staff/:staffId/assign/:taskId", staffController.assignTask);
router.put("/staff/:staffId/morale", staffController.updateMorale);
export default router;
