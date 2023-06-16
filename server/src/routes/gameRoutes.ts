import express from "express";

import * as gameController from "../controllers/gameController";
const router = express.Router();
router.get("/games", gameController.getAllGames);

router.get("/games/:gameId", gameController.getGameById);

router.post("/games", gameController.createGame);

router.put("/games/:gameId", gameController.updateGame);

router.delete("/games/:gameId", gameController.deleteGame);

router.put("/games/:gameId/staff/:staffId", gameController.addStaffToGame);

router.delete(
  "/games/:gameId/staff/:staffId",
  gameController.removeStaffFromGame
);

router.put("/games/:gameId/tasks/:taskId", gameController.addTaskToGame);

router.delete(
  "/games/:gameId/tasks/:taskId",
  gameController.removeTaskFromGame
);
router.put("/games/:gameId/events/:eventId", gameController.addEventToGame);

router.delete(
  "/games/:gameId/events/:eventId",
  gameController.removeEventFromGame
);

export default router;
