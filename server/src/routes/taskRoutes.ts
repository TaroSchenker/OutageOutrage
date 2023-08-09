import express from 'express';
import * as taskController from '../controllers/taskController';
import catchAsync from '../utils/catchAsync';

const router = express.Router();

router.get('/', catchAsync(taskController.getAllTasks));

router.get('/:taskId', catchAsync(taskController.getTaskById));

router.post('/', catchAsync(taskController.createTask));

router.put('/:taskId', catchAsync(taskController.updateTask));

router.delete('/:taskId', catchAsync(taskController.deleteTask));

router.put('/:taskId/assignTask', catchAsync(taskController.assignTaskToStaff));

router.put(
  '/:taskId/removeStaff',
  catchAsync(taskController.removeStaffFromTask),
);

export default router;
