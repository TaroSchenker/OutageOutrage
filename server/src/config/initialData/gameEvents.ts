import {
  BusinessImpact,
  EventType,
  Expertise,
  IGameData,
  Role,
  TaskStatus,
  TaskType,
} from '../../types/types';

export const events = [
  {
    id: '1',
    type: EventType.SERVER_CRASH,
    severity: 8,
    effectOnMorale: -20,
    effectOnBudget: -10000,
    effectOnTasks: null,
  },
  {
    id: '2',
    type: EventType.SECURITY_BREACH,
    severity: 9,
    effectOnMorale: -30,
    effectOnBudget: -20000,
    effectOnTasks: null,
  },
  {
    id: '3',
    type: EventType.JOB_OFFER,
    severity: 6,
    effectOnMorale: -15,
    effectOnBudget: 0,
    effectOnTasks: null,
  },
  {
    id: '4',
    type: EventType.BUDGET_CUT,
    severity: 7,
    effectOnMorale: -10,
    effectOnBudget: -50000,
    effectOnTasks: null,
  },
  {
    id: '5',
    type: EventType.SERVER_CRASH,
    severity: 8,
    effectOnMorale: -25,
    effectOnBudget: -15000,
    effectOnTasks: null,
  },
  {
    id: '6',
    type: EventType.SECURITY_BREACH,
    severity: 9,
    effectOnMorale: -35,
    effectOnBudget: -25000,
    effectOnTasks: null,
  },
  {
    id: '7',
    type: EventType.JOB_OFFER,
    severity: 5,
    effectOnMorale: -10,
    effectOnBudget: 0,
    effectOnTasks: null,
  },
  {
    id: '8',
    type: EventType.BUDGET_CUT,
    severity: 6,
    effectOnMorale: -15,
    effectOnBudget: -40000,
    effectOnTasks: null,
  },
  {
    id: '9',
    type: EventType.SERVER_CRASH,
    severity: 7,
    effectOnMorale: -20,
    effectOnBudget: -12000,
    effectOnTasks: null,
  },
  {
    id: '10',
    type: EventType.SECURITY_BREACH,
    severity: 9,
    effectOnMorale: -30,
    effectOnBudget: -20000,
    effectOnTasks: null,
  },
];

//postman json body for create a new game
export const initGameData: any = {
  budget: 9999900,
  morale: 100,
  businessImpact: BusinessImpact.LOW,
  staff: [
    {
      name: 'John Doe',
      role: Role.FRONTEND_DEV,
      expertise: 'Java',
      ambition: 10,
      loyalty: 100,
      skillLevel: 10,
      resilience: 10,
      adaptability: 10,
      morale: 100,
      currentTask: null,
    },
    {
      name: 'Alice',
      role: Role.FRONTEND_DEV,
      expertise: Expertise.JAVASCRIPT,
      ambition: 7,
      loyalty: 6,
      skillLevel: 8,
      resilience: 5,
      adaptability: 6,
      morale: 70,
      currentTask: null,
    },
  ],
  tasks: [
    {
      type: TaskType.BUG_FIX,
      complexity: 1,
      timeToComplete: 1,
      assignedTo: null,
      expertiseRequired: Expertise.JAVA,
      criticality: 1,
      status: TaskStatus.NOT_STARTED,
    },
  ],
  events: [
    {
      type: EventType.BUDGET_CUT,
      severity: 10,
      effectOnMorale: 10,
      effectOnBudget: 10,
      effectOnTasks: null,
    },
  ],
  timeRemaining: 180,
  startingBudget: 1000000,
  timePeriod: 180,
};