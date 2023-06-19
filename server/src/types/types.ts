import { Document, ObjectId } from 'mongoose';

//Types for non mongoose models
export interface IGameData {
  budget: number;
  morale: number;
  businessImpact: BusinessImpact;
  staff: Array<ObjectId>;
  tasks: Array<ObjectId>;
  events: Array<ObjectId>;
  timeRemaining: number; // decreases by 1 each day
  startingBudget: number;
  timePeriod: number; //game length in days (180 days = 6 months)
}

export interface IStaffData {
  name: string;
  role: Role;
  expertise: string;
  ambition: number;
  loyalty: number;
  skillLevel: number;
  resilience: number;
  adaptability: number;
  morale: number;
  currentTask: string | null;
}

export interface ITaskData {
  type: TaskType;
  complexity: number;
  timeToComplete: number;
  assignedTo: string | null;
  expertiseRequired: Expertise;
  criticality: number;
  status: TaskStatus;
}

export interface IGameEventData {
  type: EventType;
  severity: number;
  effectOnMorale: number;
  effectOnBudget: number;
  effectOnTasks: ITaskData | null;
}

//Types for Mongoose Models
export interface IStaff extends Document, IStaffData {}

export interface ITask extends Document, ITaskData {}

export interface IGameEvent extends Document, IGameEventData {}

export interface IGame extends Document, IGameData {}

//Enums
export enum Role {
  FRONTEND_DEV = 'Frontend Developer',
  BACKEND_DEV = 'Backend Developer',
  QA = 'Quality Assurance',
  PROJECT_MANAGER = 'Project Manager',
  UX_UI_DESIGNER = 'UX/UI Designer',
  SECURITY_SPECIALIST = 'Security Specialist',
}

export enum TaskType {
  BUG_FIX = 'Bug Fix',
  NEW_FEATURE = 'New Feature',
  SECURITY_PATCH = 'Security Patch',
}

export enum EventType {
  SERVER_CRASH = 'Server Crash',
  SECURITY_BREACH = 'Security Breach',
  JOB_OFFER = 'Job Offer',
  BUDGET_CUT = 'Budget Cut',
}

export enum Expertise {
  JAVASCRIPT = 'JavaScript',
  PYTHON = 'Python',
  JAVA = 'Java',
  CYBER_SECURITY = 'Cyber Security',
  SOFTWARE_TESTING = 'Software Testing',
  PROJECT_MANAGEMENT = 'Project Management',
  UX_DESIGN = 'UX Design',
}

export enum BusinessImpact {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical',
}

export enum TaskStatus {
  NOT_STARTED = 'Not Started',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  BLOCKED = 'Blocked',
}

export const STARTING_BUDGET = 1000000;
export const TIME_PERIOD = 180; // 6 months

export const MIN_SKILL_LEVEL = 1;
export const MAX_SKILL_LEVEL = 10;

export const MIN_MORALE = 0;
export const MAX_MORALE = 100;

export const MIN_COMPLEXITY = 1;
export const MAX_COMPLEXITY = 10;

export const MIN_TIME_TO_COMPLETE = 1;
export const MAX_TIME_TO_COMPLETE = 30; // assuming in days
