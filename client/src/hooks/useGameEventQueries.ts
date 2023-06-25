//useTaskQueries.ts
import { useQuery } from '@tanstack/react-query';
import { getAllGameEvents, getGameEventById } from '../api';

export function useGetAllGameEvent() {
  return useQuery(['getAllGameEvents'], getAllGameEvents);
}

export function useGetGameEventById(taskId: string) {
  return useQuery(['getGameEventById', taskId], () => getGameEventById(taskId));
}
