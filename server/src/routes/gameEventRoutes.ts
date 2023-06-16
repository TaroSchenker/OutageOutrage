import express from "express";

import * as staffController from "../controllers/staffController";
import * as gameEventController from "../controllers/gameEventController";
import * as gameController from "../controllers/gameController";
const router = express.Router();

router.get("/events", gameEventController.getAllEvents);

router.get("/events/:id", gameEventController.getEventById);

router.post("/events", gameEventController.createEvent);

router.put("/events/:id", gameEventController.updateEvent);

router.delete("/events/:id", gameEventController.deleteEvent);

export default router;
