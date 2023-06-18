import express from 'express';

import * as staffController from '../controllers/staffController';

const router = express.Router();
router.get('/', staffController.getAllStaff);
router.get('/:staffId', staffController.getStaffById);
router.post('/', staffController.createStaff);
router.put('/:staffId', staffController.updateStaff);
router.delete('/:staffId', staffController.deleteStaff);
router.put('/:staffId/assign/:taskId', staffController.assignTask);
router.put('/:staffId/morale', staffController.updateMorale);
export default router;
