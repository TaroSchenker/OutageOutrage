//Types for non mongoose models
export interface IGameData {
  budget: number;
  morale: number;
  businessImpact: BusinessImpact;
  staff: Array<string>;
  tasks: Array<string>;
  events: Array<string>;
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
  availability: boolean;
  salary: number;
  satisfaction: number;
}

export interface ITaskData {
  type: TaskType;
  complexity: number;
  timeToComplete: number;
  assignedTo: string | null;
  expertiseRequired: Expertise;
  criticality: number;
  status: TaskStatus;
  dependencies: Array<string>;
  businessImpact: BusinessImpact;
  progress: number;
  description: string;
}

export interface IGameEventData {
  type: EventType;
  severity: number;
  effectOnMorale: number;
  effectOnBudget: number;
  effectOnTasks: ITaskData | null;
  duration: number; // in days, add to model
}

//Enums
export enum Role {
  FRONTEND_DEV = 'Frontend Developer',
  BACKEND_DEV = 'Backend Developer',
  QA = 'Quality Assurance',
  PROJECT_MANAGER = 'Project Manager',
  UX_UI_DESIGNER = 'UX/UI Designer',
  SECURITY_SPECIALIST = 'Security Specialist',
  DEVOPS_ENGINEER = 'DevOps Engineer', // Responsible for server, CI/CD pipelines, and infrastructure
  DATA_SCIENTIST = 'Data Scientist', // Works with data to extract insights
  PRODUCT_OWNER = 'Product Owner', // Directs product vision, prioritizes tasks
}

export enum TaskType {
  BUG_FIX = 'Bug Fix',
  NEW_FEATURE = 'New Feature',
  SECURITY_PATCH = 'Security Patch',
  PERFORMANCE_IMPROVEMENT = 'Performance Improvement', // Improve website loading speed, optimization
  UI_IMPROVEMENT = 'UI Improvement', // Enhance website's user interface
  DEVOPS_SETUP = 'DevOps Setup', // Set up or manage CI/CD pipelines, servers
  DATA_ANALYSIS = 'Data Analysis', // Analyze data and generate insights
  PRODUCT_BACKLOG_PRIORITIZATION = 'Product Backlog Prioritization', // Prioritize tasks for the next sprint
  FEATURE_VALIDATION = 'Feature Validation', // Validate the requirements of a new feature
  USER_RESEARCH = 'User Research', // Research on user needs and behavior
  CUSTOMER_JOURNEY_MAPPING = 'Customer Journey Mapping', // Map the journey of a user to identify potential issues
  INFRASTRUCTURE_MONITORING = 'Infrastructure Monitoring', // Monitor server and infrastructure health
  SECURITY_AUDIT = 'Security Audit', // Audit the system for potential security issues
  A_B_TESTING = 'A/B Testing', // Run A/B tests to validate feature effectiveness
  CODE_REVIEW = 'Code Review', // Review code for quality assurance
  STRESS_TESTING = 'Stress Testing', // Test system under heavy load
}

export enum EventType {
  SERVER_CRASH = 'Server Crash',
  SECURITY_BREACH = 'Security Breach',
  JOB_OFFER = 'Job Offer',
  BUDGET_CUT = 'Budget Cut',
  PRODUCT_LAUNCH = 'Product Launch', // Launching a new product feature
  MAJOR_OUTAGE = 'Major Outage', // Significant downtime affecting multiple systems
  STAFF_RETENTION_ISSUE = 'Staff Retention Issue', // High staff turnover
  LEGAL_ISSUE = 'Legal Issue', // Legal problems like lawsuits or compliance issues
  DATA_BREACH = 'Data Breach', // Customer data is compromised
}

export enum Expertise {
  JAVASCRIPT = 'JavaScript',
  PYTHON = 'Python',
  JAVA = 'Java',
  CYBER_SECURITY = 'Cyber Security',
  SOFTWARE_TESTING = 'Software Testing',
  PROJECT_MANAGEMENT = 'Project Management',
  UX_DESIGN = 'UX Design',
  C_SHARP = 'C#',
  SQL = 'SQL',
  MACHINE_LEARNING = 'Machine Learning',
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
