import axios, { AxiosResponse } from 'axios';
import {
  IClientGameData,
  IClientGameEventData,
  IClientStaffData,
  IClientTaskData,
} from '../types/types';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

async function handleErrors<T>(
  promise: Promise<T>,
): Promise<{ error: Error | null; data: T | null }> {
  try {
    const data = await promise;
    return { error: null, data };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error occurred:', error);
      return { error, data: null };
    } else {
      // If it's not an Error object, it's an unexpected situation, so rethrow
      throw error;
    }
  }
}
//Game requests
export const getAllGames = async () => {
  const { error, data } = await handleErrors(
    instance.get<IClientGameData[]>('/game'),
  );
  if (error) {
    throw error;
  }
  return data ? data.data : [];
};
export const getGameById = async (gameId: string) => {
  const { error, data } = await handleErrors(
    instance.get<IClientGameData>(`/game/${gameId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};

//TODO: Types here.
export const createGame = async (game: object) => {
  const { error, data } = await handleErrors(instance.post('/game', game));

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

export const updateGame = async (
  gameId: string,
  updates: Partial<IClientGameData>,
) => {
  const { error, data } = await handleErrors(
    instance.put<IClientGameData>(`/game/${gameId}`, updates),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};

//TODO: Types here
export const deleteGame = async (gameId: string) => {
  const { error, data } = await handleErrors(
    instance.delete(`/game/${gameId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

// GameState requests
export const getGameState = async (gameId: string) => {
  const { error, data } = await handleErrors(
    instance.get(`/gameState/${gameId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

export const initializeGameState = async () => {
  const { error, data } = await handleErrors(instance.post(`/gameState`));

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

export const startNewTurn = async (gameId: string) => {
  const { error, data } = await handleErrors(
    instance.post(`/gameState/${gameId}/turn`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

// Staff requests
export const getAllStaff = async () => {
  const { error, data } = await handleErrors(
    instance.get<IClientStaffData[]>('/staff'),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

export const getStaffById = async (staffId: string) => {
  const { error, data } = await handleErrors(
    instance.get<IClientStaffData>(`/staff/${staffId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};

// Task requests
export const getAllTasks = async () => {
  const { error, data } = await handleErrors(
    instance.get<IClientTaskData[]>('/tasks'),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

export const getTaskById = async (taskId: string) => {
  const { error, data } = await handleErrors(
    instance.get<IClientTaskData>(`/game/${taskId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};

// GameEvent requests
export const getAllGameEvents = async () => {
  const { error, data } = await handleErrors(
    instance.get<IClientGameEventData[]>('/gameEvents'),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

export const getGameEventById = async (gameEventId: string) => {
  const { error, data } = await handleErrors(
    instance.get<IClientGameData>(`/gameEvents/${gameEventId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};

export const createGameEvent = async (event: IClientGameData) => {
  const { error, data } = await handleErrors(
    instance.post<IClientGameData>('/gameEvents/events', event),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};

export const updateGameEvent = async (
  eventId: string,
  updates: Partial<IClientGameEventData>,
) => {
  const { error, data } = await handleErrors(
    instance.put<IClientGameEventData>(
      `/gameEvents/events/${eventId}`,
      updates,
    ),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};

//TODO: Types here
export const deleteGameEvent = async (eventId: string) => {
  const { error, data } = await handleErrors(
    instance.delete(`/gameEvents/events/${eventId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : [];
};

// GameState requests
export const getGameStateById = async (gameStateId: string) => {
  const { error, data } = await handleErrors(
    instance.get<IClientGameData>(`/gameState/${gameStateId}`),
  );

  if (error) {
    throw error;
  }

  return data ? data.data : {};
};
