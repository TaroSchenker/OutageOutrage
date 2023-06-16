import mongoose, { Document } from "mongoose";

export interface IStaff extends Document {
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

export interface ITask extends Document {
  id: string;
  type: TaskType;
  complexity: number;
  timeToComplete: number;
  assignedTo: string | null;
  expertiseRequired: string;
  criticality: number;
}

export interface IGameEvent extends Document {
  id: string;
  type: EventType;
  severity: number;
  effectOnMorale: number;
}

export interface IGame extends Document {
  id: string;
  budget: number;
  morale: number;
  businessImpact: number; // New field for overall business impact
  staff: Array<IStaff>;
  tasks: Array<ITask>;
  events: Array<IGameEvent>;
  timeRemaining: number;
}

//Enums
export enum Role {
  FRONTEND_DEV = "Frontend Developer",
  BACKEND_DEV = "Backend Developer",
  QA = "Quality Assurance",
  PROJECT_MANAGER = "Project Manager",
  UX_UI_DESIGNER = "UX/UI Designer",
  SECURITY_SPECIALIST = "Security Specialist",
}

export enum TaskType {
  BUG_FIX = "Bug Fix",
  NEW_FEATURE = "New Feature",
  SECURITY_PATCH = "Security Patch",
}

export enum EventType {
  SERVER_CRASH = "Server Crash",
  SECURITY_BREACH = "Security Breach",
  JOB_OFFER = "Job Offer",
  BUDGET_CUT = "Budget Cut",
}

export enum Expertise {
  JAVASCRIPT = "JavaScript",
  PYTHON = "Python",
  JAVA = "Java",
  CYBER_SECURITY = "Cyber Security",
  SOFTWARE_TESTING = "Software Testing",
  PROJECT_MANAGEMENT = "Project Management",
  UX_DESIGN = "UX Design",
}

export enum BusinessImpact {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
  CRITICAL = "Critical",
}

export enum TaskStatus {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
  BLOCKED = "Blocked",
}


export const STARTING_BUDGET: number = 1000000;
export const TIME_PERIOD: number = 180; // 6 months

export const MIN_SKILL_LEVEL: number = 1;
export const MAX_SKILL_LEVEL: number = 10;

export const MIN_MORALE: number = 0;
export const MAX_MORALE: number = 100;

export const MIN_COMPLEXITY: number = 1;
export const MAX_COMPLEXITY: number = 10;

export const MIN_TIME_TO_COMPLETE: number = 1;
export const MAX_TIME_TO_COMPLETE: number = 30; // assuming in days
