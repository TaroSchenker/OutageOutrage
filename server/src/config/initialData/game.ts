import { BusinessImpact, IGameData } from '../../types/types';

export const gameInitData: IGameData[] = [
  {
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
  },
  {
    budget: 500000,
    morale: 500,
    businessImpact: BusinessImpact.LOW,
    staff: [],
    tasks: [],
    events: [],
    timeRemaining: 180,
    startingBudget: 400000,
    totalSpent: 0,
    timePeriod: 180,
    websiteHealth: 100,
  },
];
