import { BusinessImpact, Expertise, ITaskData, TaskStatus, TaskType } from "../../../types/types";

const tasks: ITaskData[] = [
    {
      type: TaskType.BUG_FIX,
      complexity: 5,
      timeToComplete: 10,
      assignedTo: null,
      expertiseRequired: Expertise.JAVASCRIPT,
      criticality: 7,
      status: TaskStatus.NOT_STARTED,
      dependencies: [],
      businessImpact: BusinessImpact.MEDIUM,
      description:
        'Some rascal forgot a semicolon and the whole shopping cart feature went haywire! Fix it before our customers end up buying the entire inventory for the price of a chewing gum.',
      progress: 0,
    },
    {
      type: TaskType.NEW_FEATURE,
      complexity: 8,
      timeToComplete: 20,
      assignedTo: null,
      expertiseRequired: Expertise.PYTHON,
      criticality: 8,
      status: TaskStatus.NOT_STARTED,
      dependencies: [],
      businessImpact: BusinessImpact.HIGH,
      description:
        "Management read in a fortune cookie that adding 'AI' to anything increases sales. Your task is to integrate an 'AI-powered' color picker to our website. How it uses AI? Who cares! Just do it!",
      progress: 0,
    },
    {
      type: TaskType.SECURITY_PATCH,
      complexity: 7,
      timeToComplete: 15,
      assignedTo: null,
      expertiseRequired: Expertise.CYBER_SECURITY,
      criticality: 9,
      status: TaskStatus.NOT_STARTED,
      dependencies: [],
      businessImpact: BusinessImpact.HIGH,
      description:
        "Our interns developed a password encryption module, but apparently, replacing every letter with 'X' isn't 'secure'. Patch it up before our customer passwords become a public secret!",
      progress: 0,
    },
    {
      type: TaskType.UI_IMPROVEMENT,
      complexity: 3,
      timeToComplete: 7,
      assignedTo: null,
      expertiseRequired: Expertise.UX_DESIGN,
      criticality: 5,
      status: TaskStatus.NOT_STARTED,
      dependencies: [],
      businessImpact: BusinessImpact.LOW,
      description:
        'Our CEO visited a website with a fancy spinning logo and now he wants one too! Add a spinning animation to our logo, and maybe it will distract him from the pending tasks.',
      progress: 0,
    },
  ];
  
  export default tasks;
