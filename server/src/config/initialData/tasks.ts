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
    complexity: 5,
    timeToComplete: 10,
    assignedTo: null,
    expertiseRequired: Expertise.JAVASCRIPT,
    criticality: 7,
    status: TaskStatus.NOT_STARTED,
    dependencies: [],
    businessImpact: BusinessImpact.MEDIUM,
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
  },
  // add 3 more tasks as per your requirements
];
