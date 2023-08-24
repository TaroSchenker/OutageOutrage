import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import { BusinessImpact, IGameData } from '../../src/types/types';
import { GameStateService } from '../../src/services/gameStateService';

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

describe('GameStateService', () => {
  let mongoServer: MongoMemoryServer;
  let gameStateService: GameStateService;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await mongoose.connect(uri);
    gameStateService = new GameStateService();
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('should initialize a new game', async () => {
    const game = await gameStateService.initializeGame();

    expect(game).toBeDefined();
    expect(game.budget).toBe(singleGameData.budget);
    expect(game.morale).toBe(singleGameData.morale);
  });

  test('startNewTurn should process a game turn', async () => {
    const game = await gameStateService.initializeGame();
    const newTurnGame = await gameStateService.startNewTurn(game._id);

    expect(newTurnGame).toBeDefined();
    expect(newTurnGame.timeRemaining).toBe(game.timeRemaining - 1);
  });

  //   test('handleStaffReduction should reduce staff', async () => {
  //     const game = await gameStateService.initializeGame();
  //     const reducedStaffGame = await gameStateService.handleStaffReduction(game);

  //     expect(reducedStaffGame).toBeDefined();
  //     expect(reducedStaffGame.staff.length).toBeLessThan(game.staff.length);
  //   });

  // test('updateStaffMorale should adjust morale', async () => {
  //   const game = await gameStateService.initializeGame();
  //   const updatedMoraleGame = await gameStateService.updateStaffMorale(game);

  //   expect(updatedMoraleGame).toBeDefined();
  //   // Add more specific checks based on your morale logic
  // });

  // test('handleEvents should process game events', async () => {
  //   const game = await gameStateService.initializeGame();
  //   const eventHandledGame = await gameStateService.handleEvents(game);

  //   expect(eventHandledGame).toBeDefined();
  //   // Add more specific checks based on your events logic
  // });

  test('checkWinLossConditions should determine game outcome', async () => {
    const game = await gameStateService.initializeGame();
    const result = gameStateService.checkWinLossConditions(game);

    expect(result).toBe('ONGOING'); // based on initial conditions
  });
});
