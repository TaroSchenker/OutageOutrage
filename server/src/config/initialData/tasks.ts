import {
  BusinessImpact,
  Expertise,
  ITaskData,
  TaskStatus,
  TaskType,
} from '../../types/types';

export const tasks: ITaskData[] = [
  {
    type: TaskType.BUG_FIX,
    complexity: 50,
    timeToComplete: 100,
    assignedTo: null,
    expertiseRequired: Expertise.JAVASCRIPT,
    criticality: 70,
    status: TaskStatus.NOT_STARTED,
    dependencies: [],
    businessImpact: BusinessImpact.MEDIUM,
    description:
      'Some rascal forgot a semicolon and the whole shopping cart feature went haywire! Fix it before our customers end up buying the entire inventory for the price of a chewing gum.',
    progress: 0,
  },
  {
    type: TaskType.NEW_FEATURE,
    complexity: 80,
    timeToComplete: 20,
    assignedTo: null,
    expertiseRequired: Expertise.PYTHON,
    criticality: 80,
    status: TaskStatus.NOT_STARTED,
    dependencies: [],
    businessImpact: BusinessImpact.HIGH,
    description:
      "Management read in a fortune cookie that adding 'AI' to anything increases sales. Your task is to integrate an 'AI-powered' color picker to our website. How it uses AI? Who cares! Just do it!",
    progress: 0,
  },
  {
    type: TaskType.SECURITY_PATCH,
    complexity: 70,
    timeToComplete: 15,
    assignedTo: null,
    expertiseRequired: Expertise.CYBER_SECURITY,
    criticality: 90,
    status: TaskStatus.NOT_STARTED,
    dependencies: [],
    businessImpact: BusinessImpact.HIGH,
    description:
      "Our interns developed a password encryption module, but apparently, replacing every letter with 'X' isn't 'secure'. Patch it up before our customer passwords become a public secret!",
    progress: 0,
  },
  {
    type: TaskType.UI_IMPROVEMENT,
    complexity: 30,
    timeToComplete: 70,
    assignedTo: null,
    expertiseRequired: Expertise.UX_DESIGN,
    criticality: 50,
    status: TaskStatus.NOT_STARTED,
    dependencies: [],
    businessImpact: BusinessImpact.LOW,
    description:
      'Our CEO visited a website with a fancy spinning logo and now he wants one too! Add a spinning animation to our logo, and maybe it will distract him from the pending tasks.',
    progress: 0,
  },
];
