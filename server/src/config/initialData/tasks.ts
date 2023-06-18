import { Expertise, ITaskData, TaskStatus, TaskType } from '../../types/types';

export const tasks: ITaskData[] = [
  {
    type: TaskType.BUG_FIX,
    complexity: 5,
    timeToComplete: 7,
    assignedTo: null,
    expertiseRequired: Expertise.JAVASCRIPT,
    criticality: 6,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.NEW_FEATURE,
    complexity: 8,
    timeToComplete: 14,
    assignedTo: null,
    expertiseRequired: Expertise.PYTHON,
    criticality: 7,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.SECURITY_PATCH,
    complexity: 9,
    timeToComplete: 10,
    assignedTo: null,
    expertiseRequired: Expertise.CYBER_SECURITY,
    criticality: 9,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.BUG_FIX,
    complexity: 4,
    timeToComplete: 5,
    assignedTo: null,
    expertiseRequired: Expertise.JAVA,
    criticality: 5,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.NEW_FEATURE,
    complexity: 7,
    timeToComplete: 15,
    assignedTo: null,
    expertiseRequired: Expertise.UX_DESIGN,
    criticality: 7,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.SECURITY_PATCH,
    complexity: 8,
    timeToComplete: 12,
    assignedTo: null,
    expertiseRequired: Expertise.CYBER_SECURITY,
    criticality: 8,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.BUG_FIX,
    complexity: 6,
    timeToComplete: 8,
    assignedTo: null,
    expertiseRequired: Expertise.JAVASCRIPT,
    criticality: 6,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.NEW_FEATURE,
    complexity: 7,
    timeToComplete: 14,
    assignedTo: null,
    expertiseRequired: Expertise.PYTHON,
    criticality: 7,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.SECURITY_PATCH,
    complexity: 9,
    timeToComplete: 13,
    assignedTo: null,
    expertiseRequired: Expertise.CYBER_SECURITY,
    criticality: 9,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.BUG_FIX,
    complexity: 5,
    timeToComplete: 6,
    assignedTo: null,
    expertiseRequired: Expertise.JAVA,
    criticality: 5,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.BUG_FIX,
    complexity: 1,
    timeToComplete: 1,
    assignedTo: null,
    expertiseRequired: Expertise.JAVA,
    criticality: 1,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.NEW_FEATURE,
    complexity: 2,
    timeToComplete: 5,
    assignedTo: null,
    expertiseRequired: Expertise.PYTHON,
    criticality: 2,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.SECURITY_PATCH,
    complexity: 3,
    timeToComplete: 7,
    assignedTo: null,
    expertiseRequired: Expertise.CYBER_SECURITY,
    criticality: 3,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.BUG_FIX,
    complexity: 4,
    timeToComplete: 3,
    assignedTo: null,
    expertiseRequired: Expertise.JAVASCRIPT,
    criticality: 4,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.NEW_FEATURE,
    complexity: 5,
    timeToComplete: 10,
    assignedTo: null,
    expertiseRequired: Expertise.PROJECT_MANAGEMENT,
    criticality: 5,
    status: TaskStatus.NOT_STARTED,
  },
  {
    type: TaskType.SECURITY_PATCH,
    complexity: 6,
    timeToComplete: 15,
    assignedTo: null,
    expertiseRequired: Expertise.SOFTWARE_TESTING,
    criticality: 6,
    status: TaskStatus.NOT_STARTED,
  },
];
