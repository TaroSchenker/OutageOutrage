import express from 'express';

import * as gameStateController from '../controllers/gameStateController';

const router = express.Router();

router.post('/', gameStateController.initializeGame);
router.post('/:gameId/turn', gameStateController.newTurn);
router.put('/tasks', gameStateController.processTaskAssignments);
// router.put('/staff', gameStateController.reduceStaff);
// router.put('/event', gameStateController.handleEvent);

export default router;
