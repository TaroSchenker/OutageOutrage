//useTaskQueries.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { createGameEvent, gameStateInitilise, getAllGameEvents, getGameEventById } from '../api';
import { IClientGameData } from '../types/types';

export function useGetAllGameEvent() {
  return useQuery(['getAllGameEvents'], getAllGameEvents);
}

export function useGetGameEventById(taskId: string) {
  return useQuery(['getGameEventById', taskId], () => getGameEventById(taskId));
}

export function useGameStateInitilise() {
  return useMutation<IClientGameData, Error, void, unknown>(gameStateInitilise);
}
