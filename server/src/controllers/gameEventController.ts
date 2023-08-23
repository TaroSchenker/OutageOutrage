import { GameEventService } from '../services/gameEventService';
import { Request, Response } from 'express';

const gameEventService = new GameEventService();

export const getAllEvents = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const allEvents = await gameEventService.getAllEvents();
  res.json(allEvents);
};

export const getEventById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const event = await gameEventService.getEventById(req.params.id);
  if (!event) {
    res.status(404).json({ message: 'event not found' });
  }
  res.status(200).json(event);
};

export const createEvent = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const event = await gameEventService.createEvent(req.body);
  res.status(201).json(event);
};

export const updateEvent = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const event = await gameEventService.updateEvent(
    req.params.id,
    req.body.eventData,
  );
  if (!event) {
    res.status(404).json({ message: 'event not found' });
  }
  res.status(200).json(event);
};

export const deleteEvent = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const event = await gameEventService.deleteEvent(req.params.id);
  if (!event) {
    res.status(404).json({ message: 'event not found' });
  }
  res.status(200).json(event);
};
