import express from 'express';

import * as gameController from '../controllers/gameController';

const router = express.Router();

router.get('/', gameController.getAllGames);

router.get('/:gameId', gameController.getGameById);

router.post('/', gameController.createGame);

router.put('/:gameId', gameController.updateGame);

router.delete('/:gameId', gameController.deleteGame);

router.put('/:gameId/staff/:staffId', gameController.addStaffToGame);

router.delete('/:gameId/staff/:staffId', gameController.removeStaffFromGame);

router.put('/:gameId/tasks/:taskId', gameController.addTaskToGame);

router.delete(
  '/games/:gameId/tasks/:taskId',
  gameController.removeTaskFromGame,
);
router.put('/games/:gameId/events/:eventId', gameController.addEventToGame);

router.delete(
  '/games/:gameId/events/:eventId',
  gameController.removeEventFromGame,
);

export default router;
