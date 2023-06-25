//useGameQueries.ts
import { useQuery } from '@tanstack/react-query';
import { getAllGames, getGameById } from '../api';

export function useGetAllGames() {
  return useQuery(['getAllGames'], getAllGames);
}

export function useGetGameById(gameId: string) {
  return useQuery(['getGameById', gameId], () => getGameById(gameId));
}
