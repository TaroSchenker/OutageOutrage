import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

// Game requests
export const getAllGames = async () => {
  const { data } = await instance.get('/game');
  return data;
};

export const getGameById = async (gameId: string) => {
  const { data } = await instance.get(`/game/${gameId}`);
  return data;
};

export const createGame = async (game: object) => {
  const { data } = await instance.post('/game', game);
  return data;
};

export const updateGame = async (gameId: string, updates: object) => {
  const { data } = await instance.put(`/game/${gameId}`, updates);
  return data;
};

export const deleteGame = async (gameId: string) => {
  const { data } = await instance.delete(`/game/${gameId}`);
  return data;
};


// GameState requests
export const getGameState = async (gameId: string) => {
    const { data } = await instance.get(`/gameState/${gameId}`);
    return data;
  };
  
  export const initializeGameState = async () => {
    const { data } = await instance.post(`/gameState`);
    return data;
  };
  
  export const startNewTurn = async (gameId: string) => {
    const { data } = await instance.post(`/gameState/${gameId}/turn`);
    return data;
  };
  

// Staff requests
export const getAllStaff = async () => {
  const { data } = await instance.get('/staff');
  return data;
};

export const getStaffById = async (staffId: string) => {
  const { data } = await instance.get(`/staff/${staffId}`);
  return data;
};
// Task requests
export const getAllTasks = async () => {
  const { data } = await instance.get('/tasks');
  return data;
};

export const createStaff = async (staff: object) => {
  const { data } = await instance.post('/staff', staff);
  return data;
};

export const updateStaff = async (staffId: string, updates: object) => {
  const { data } = await instance.put(`/staff/${staffId}`, updates);
  return data;
};

export const deleteStaff = async (staffId: string) => {
  const { data } = await instance.delete(`/staff/${staffId}`);
  return data;
};

export const assignTask = async (staffId: string, taskId: string) => {
  const { data } = await instance.put(`/staff/${staffId}/assignTask`, { taskId });
  return data;
};

export const updateMorale = async (staffId: string, morale: number) => {
  const { data } = await instance.put(`/staff/${staffId}/morale`, { morale });
  return data;
};


export const createTask = async (task: string) => {
  const { data } = await instance.post('/tasks', task);
  return data;
};

export const updateTask = async (taskId: string, updates: string) => {
  const { data } = await instance.put(`/tasks/${taskId}`, updates);
  return data;
};

export const deleteTask = async (taskId: string) => {
  const { data } = await instance.delete(`/tasks/${taskId}`);
  return data;
};

// GameEvent requests
export const getAllGameEvents = async () => {
  const { data } = await instance.get('/gameEvents');
  return data;
};

export const getGameEventById = async (gameEventId: string) => {
  const { data } = await instance.get(`/gameEvents/${gameEventId}`);
  return data;
};

export const createGameEvent = async (event: object) => {
  const { data } = await instance.post('/gameEvents/events', event);
  return data;
};

export const updateGameEvent = async (eventId: string, updates: object) => {
  const { data } = await instance.put(`/gameEvents/events/${eventId}`, updates);
  return data;
};

export const deleteGameEvent = async (eventId: string) => {
  const { data } = await instance.delete(`/gameEvents/events/${eventId}`);
  return data;
};

// GameState requests
export const getGameStateById = async (gameStateId: string) => {
  const { data } = await instance.get(`/gameState/${gameStateId}`);
  return data;
};
