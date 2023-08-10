"use strict";
// import {
//   EventType,
//   Game,
//   GameEvent,
//   IGame,
//   Role,
//   STARTING_BUDGET,
//   Staff,
//   TIME_PERIOD,
//   Task,
//   TaskType,
// } from './types/types';
// // Initial staff setup
// const STAFF: Staff[] = [
//   {
//     id: '1',
//     name: 'Alice',
//     role: Role.FRONTEND_DEV,
//     expertise: 'Website Design',
//     ambition: 7,
//     loyalty: 8,
//     skillLevel: 8,
//     resilience: 7,
//     adaptability: 6,
//     morale: 85,
//     currentTask: null,
//   },
//   {
//     id: '2',
//     name: 'Bob',
//     role: Role.BACKEND_DEV,
//     expertise: 'Inventory Management',
//     ambition: 6,
//     loyalty: 7,
//     skillLevel: 8,
//     resilience: 8,
//     adaptability: 6,
//     morale: 80,
//     currentTask: null,
//   },
//   // Add more staff as required...
// ];
// // Initial tasks setup
// const TASKS: Task[] = [
//   {
//     id: '1',
//     type: TaskType.BUG_FIX,
//     complexity: 5,
//     timeToComplete: 7,
//     assignedTo: null,
//     expertiseRequired: 'Website Design',
//     criticality: 8,
//   },
//   {
//     id: '2',
//     type: TaskType.NEW_FEATURE,
//     complexity: 8,
//     timeToComplete: 14,
//     assignedTo: null,
//     expertiseRequired: 'Inventory Management',
//     criticality: 7,
//   },
//   // Add more tasks as required...
// ];
// // Initial events setup
// const EVENTS: GameEvent[] = [
//   {
//     id: '1',
//     type: EventType.SERVER_CRASH,
//     severity: 7,
//     effectOnMorale: -20,
//   },
//   {
//     id: '2',
//     type: EventType.SECURITY_BREACH,
//     severity: 9,
//     effectOnMorale: -30,
//   },
//   // Add more events as required...
// ];
// // Initial game setup
// const GAME: IGame = {
//   id: '1',
//   budget: STARTING_BUDGET,
//   morale: 80,
//   businessImpact: 0,
//   staff: STAFF,
//   tasks: TASKS,
//   events: EVENTS,
//   timeRemaining: TIME_PERIOD,
// };
