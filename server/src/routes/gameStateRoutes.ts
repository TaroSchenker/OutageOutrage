import express from 'express';

import * as gameStateController from '../controllers/gameStateController';

const router = express.Router();

router.post('/', gameStateController.initializeGame);

export default router;
