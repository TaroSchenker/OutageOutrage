//useTaskQueries.ts
import { useQuery } from '@tanstack/react-query';
import { getAllGames, getGameById } from '../api';

export function useGetAllGames() {
  return useQuery(['getAllGames'], getAllGames);
}

export function useGetGameEventById(taskId: string) {
  return useQuery(['getGameEventById', taskId], () => getGameById);
}
