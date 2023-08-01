//Types for non mongoose models
export interface IClientGameData {
  _id: string;
  budget: number;
  morale: number;
  businessImpact: BusinessImpact;
  staff: Array<IClientStaffData>;
  tasks: Array<IClientTaskData>;
  events: Array<IClientGameEventData>;
  timeRemaining: number; // decreases by 1 each day
  startingBudget: number;
  totalSpent: number;
  timePeriod: number; //game length in days (180 days = 6 months)
  websiteHealth: number; // 0 - 100
}

export interface IClientStaffData {
  _id: string;
  name: string;
  avatarUrl: string;
  role: Role;
  expertise: string;
  ambition: number; // 0 - 100
  loyalty: number; // 0 - 100
  skillLevel: number; // 0 - 100
  resilience: number; // 0 - 100
  adaptability: number; // 0 - 100
  morale: number; // 0 - 100
  currentTask: string | null;
  availability: boolean;
  salary: number;
  satisfaction: number; // 0 - 100
}

export interface IClientTaskData {
  _id: string
  type: TaskType;
  complexity: number; // 0 - 100
  timeToComplete: number; // 0 - 100
  assignedTo: string | null;
  expertiseRequired: Expertise;
  criticality: number; // 0 - 100
  status: TaskStatus;
  dependencies: Array<string>;
  businessImpact: BusinessImpact;
  progress: number; // 0 - 100
  description: string;
}

export interface IClientGameEventData {
  _id: string;
  type: EventType;
  severity: number; // 0 - 100
  effectOnMorale: number; // 0 - 100
  effectOnBudget: number; // 0 - 100
  effectOnTasks: IClientTaskData | null; 
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

export const MIN_SKILL_LEVEL = 0;
export const MAX_SKILL_LEVEL = 100;

export const MIN_MORALE = 0;
export const MAX_MORALE = 100;

export const MIN_COMPLEXITY = 0;
export const MAX_COMPLEXITY = 100;

export const MIN_TIME_TO_COMPLETE = 0;
export const MAX_TIME_TO_COMPLETE = 100;

