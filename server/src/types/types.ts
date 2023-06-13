export interface Staff {
  id: string;
  name: string;
  role: string;
  expertise: string; // New field for staff's expertise
  ambition: number;
  loyalty: number;
  skillLevel: number;
  resilience: number;
  adaptability: number;
  morale: number;
  currentTask: string | null;
}

  export interface Task {
    id: string;
    type: string;
    complexity: number;
    timeToComplete: number;
    assignedTo: string | null;
    expertiseRequired: string; // New field for required expertise
    criticality: number; // New field for task criticality
}


  export interface Event {
    id: string;
    type: string;
    severity: number;
    effectOnMorale: number;
  }

  export interface Game {
    id: string;
    budget: number;
    morale: number;
    businessImpact: number; // New field for overall business impact
    staff: Array<Staff>;
    tasks: Array<Task>;
    events: Array<Event>;
    timeRemaining: number;
}

//Enums
enum Role {
  FRONTEND_DEV = "Frontend Developer",
  BACKEND_DEV = "Backend Developer",
  QA = "Quality Assurance",
  PROJECT_MANAGER = "Project Manager",
  UX_UI_DESIGNER = "UX/UI Designer",
  SECURITY_SPECIALIST = "Security Specialist",
}

enum TaskType {
  BUG_FIX = "Bug Fix",
  NEW_FEATURE = "New Feature",
  SECURITY_PATCH = "Security Patch",
}

enum EventType {
  SERVER_CRASH = "Server Crash",
  SECURITY_BREACH = "Security Breach",
  JOB_OFFER = "Job Offer",
  BUDGET_CUT = "Budget Cut",
}

const STARTING_BUDGET: number = 1000000;
const TIME_PERIOD: number = 180; // 6 months

const MIN_SKILL_LEVEL: number = 1;
const MAX_SKILL_LEVEL: number = 10;

const MIN_MORALE: number = 0;
const MAX_MORALE: number = 100;

const MIN_COMPLEXITY: number = 1;
const MAX_COMPLEXITY: number = 10;

const MIN_TIME_TO_COMPLETE: number = 1;
const MAX_TIME_TO_COMPLETE: number = 30; // assuming in days
