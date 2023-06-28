//useGameQueries.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { createGame, getAllGames, getGameById } from '../api';
import { IClientGameData } from '../types/types';

export function useGetAllGames() {
  return useQuery(['getAllGames'], getAllGames);
}

export function useGetGameById(gameId: string) {
  return useQuery(['getGameById', gameId], () => getGameById);
}

export function useCreateGame() {
  return useMutation(['createGame'], createGame);

}
