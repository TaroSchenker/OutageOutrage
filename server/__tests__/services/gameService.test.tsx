import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { GameService } from '../../src/services/gameService';
import { BusinessImpact, IGame, IGameData } from '../../src/types/types';
import { gameInitData as gameTestData } from '../../src/config/initialData/game';

const singleGameData: IGameData = {
  budget: 200000,
  morale: 100,
  businessImpact: BusinessImpact.LOW,
  staff: [],
  tasks: [],
  events: [],
  timeRemaining: 180,
  startingBudget: 200000,
  totalSpent: 0,
  timePeriod: 180,
  websiteHealth: 100,
};

describe('GameService', () => {
  let mongoServer: MongoMemoryServer;
  let gameService: GameService;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
    gameService = new GameService();
  });

  beforeEach(async () => {
    await gameService.createGame(gameTestData[0]);
    await gameService.createGame(gameTestData[1]);
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should create a new game', async () => {
    const game = await gameService.createGame(singleGameData);
    expect(game).toMatchObject(singleGameData);
  });

  test('getAllGames should retrieve all games', async () => {
    const allGames = await gameService.getAllGames();
    expect(allGames.length).toBe(gameTestData.length);
  });

  test('getGameById should retrieve a game by ID', async () => {
    const game = await gameService.createGame(singleGameData);
    const gameFromId = await gameService.getGameById(game._id);
    expect(String(gameFromId?._id)).toBe(String(game._id));
  });

  test('updateGame should update a game', async () => {
    const gameUpdates: Partial<IGame> = {
      /* ... your updates here ... */
    };
    const game = await gameService.createGame(singleGameData);
    const updatedGame = await gameService.updateGame(game._id, gameUpdates);

    // Check if the update was successful.
    expect(updatedGame).toMatchObject(gameUpdates);
  });

  test('deleteGame should delete a game', async () => {
    const game = await gameService.createGame(singleGameData);
    const gameFromId = await gameService.getGameById(game._id);
    expect(gameFromId).toBeDefined();
    const deletedGame = await gameService.deleteGame(game._id);
    expect(String(deletedGame?._id)).toBe(String(game._id));
  });

  // Add your tests for other methods like adding/removing staff, tasks, and events here...
});
