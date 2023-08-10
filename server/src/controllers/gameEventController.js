"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.createEvent = exports.getEventById = exports.getAllEvents = void 0;
const gameEventService_1 = require("../services/gameEventService");
const gameEventService = new gameEventService_1.GameEventService();
const getAllEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allEvents = yield gameEventService.getAllEvents();
    return res.json(allEvents);
});
exports.getAllEvents = getAllEvents;
const getEventById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const event = yield gameEventService.getEventById(req.params.id);
    if (!event) {
        return res.status(404).json({ message: 'event not found' });
    }
    return res.status(200).json(event);
});
exports.getEventById = getEventById;
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const event = yield gameEventService.createEvent(req.body);
    return res.status(201).json(event);
});
exports.createEvent = createEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const event = yield gameEventService.updateEvent(req.params.id, req.body.eventData);
    if (!event) {
        return res.status(404).json({ message: 'event not found' });
    }
    return res.status(200).json(event);
});
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const event = yield gameEventService.deleteEvent(req.params.id);
    if (!event) {
        return res.status(404).json({ message: 'event not found' });
    }
    return res.status(200).json(event);
});
exports.deleteEvent = deleteEvent;
