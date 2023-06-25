import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

async function handleErrors<T>(
  promise: Promise<T>,
): Promise<{ error: any; data?: T }> {
  try {
    const data = await promise;
    return { error: null, data };
  } catch (error) {
    console.error('Error occurred:', error);
    return { error };
  }
}

export const getAllGames = async () => {
  const { error, data } = await handleErrors(instance.get('/game'));
  if (error) {
    throw error;
  }
  return data;
};
export const getGameById = async (gameId: string) => {
  const { error, data } = await handleErrors(instance.get(`/game/${gameId}`));

  if (error) {
    throw error;
  }

  return data;
};

export const createGame = async (game: object) => {
  const { error, data } = await handleErrors(instance.post('/game', game));

  if (error) {
    throw error;
  }

  return data;
};

export const updateGame = async (gameId: string, updates: object) => {
  const { error, data } = await handleErrors(
    instance.put(`/game/${gameId}`, updates),
  );

  if (error) {
    throw error;
  }

  return data;
};

export const deleteGame = async (gameId: string) => {
  const { error, data } = await handleErrors(
    instance.delete(`/game/${gameId}`),
  );

  if (error) {
    throw error;
  }

  return data;
};

// GameState requests
export const getGameState = async (gameId: string) => {
  const { error, data } = await handleErrors(
    instance.get(`/gameState/${gameId}`),
  );

  if (error) {
    throw error;
  }

  return data;
};

export const initializeGameState = async () => {
  const { error, data } = await handleErrors(instance.post(`/gameState`));

  if (error) {
    throw error;
  }

  return data;
};

export const startNewTurn = async (gameId: string) => {
  const { error, data } = await handleErrors(
    instance.post(`/gameState/${gameId}/turn`),
  );

  if (error) {
    throw error;
  }

  return data;
};

// Staff requests
export const getAllStaff = async () => {
  const { error, data } = await handleErrors(instance.get('/staff'));

  if (error) {
    throw error;
  }

  return data;
};

export const getStaffById = async (staffId: string) => {
  const { error, data } = await handleErrors(instance.get(`/staff/${staffId}`));

  if (error) {
    throw error;
  }

  return data;
};

// Task requests
export const getAllTasks = async () => {
  const { error, data } = await handleErrors(instance.get('/tasks'));

  if (error) {
    throw error;
  }

  return data;
};
// GameEvent requests
export const getAllGameEvents = async () => {
  const { error, data } = await handleErrors(instance.get('/gameEvents'));

  if (error) {
    throw error;
  }

  return data;
};

export const getGameEventById = async (gameEventId: string) => {
  const { error, data } = await handleErrors(
    instance.get(`/gameEvents/${gameEventId}`),
  );

  if (error) {
    throw error;
  }

  return data;
};

export const createGameEvent = async (event: object) => {
  const { error, data } = await handleErrors(
    instance.post('/gameEvents/events', event),
  );

  if (error) {
    throw error;
  }

  return data;
};

export const updateGameEvent = async (eventId: string, updates: object) => {
  const { error, data } = await handleErrors(
    instance.put(`/gameEvents/events/${eventId}`, updates),
  );

  if (error) {
    throw error;
  }

  return data;
};

export const deleteGameEvent = async (eventId: string) => {
  const { error, data } = await handleErrors(
    instance.delete(`/gameEvents/events/${eventId}`),
  );

  if (error) {
    throw error;
  }

  return data;
};

// GameState requests
export const getGameStateById = async (gameStateId: string) => {
  const { error, data } = await handleErrors(
    instance.get(`/gameState/${gameStateId}`),
  );

  if (error) {
    throw error;
  }

  return data;
};
