import { EventType, IGameEventData } from '../../types/types';

export const events: IGameEventData[] = [
  {
    type: EventType.SERVER_CRASH,
    severity: 8,
    effectOnMorale: -20,
    effectOnBudget: -10000,
    effectOnTasks: null,
    duration: 3,
  },
  {
    type: EventType.SECURITY_BREACH,
    severity: 9,
    effectOnMorale: -30,
    effectOnBudget: -15000,
    effectOnTasks: null,
    duration: 5,
  },
  {
    type: EventType.JOB_OFFER,
    severity: 6,
    effectOnMorale: 10,
    effectOnBudget: 0,
    effectOnTasks: null,
    duration: 0,
  },
  {
    type: EventType.BUDGET_CUT,
    severity: 7,
    effectOnMorale: -10,
    effectOnBudget: -20000,
    effectOnTasks: null,
    duration: 0,
  },
  {
    type: EventType.SERVER_CRASH,
    severity: 8,
    effectOnMorale: -20,
    effectOnBudget: -10000,
    effectOnTasks: null,
    duration: 2,
  },
];
