import { Expertise, IStaffData, Role } from '../../types/types';

export const staff: IStaffData[] = [
  {
    name: 'API Andy',
    avatarUrl:
      'https://raw.githubusercontent.com/TaroSchenker/OutageOutrage/main/client/src/assets/images/staff/BackendDev.png',
    role: Role.BACKEND_DEV,
    expertise: Expertise.JAVA,
    ambition: 10,
    loyalty: 60,
    skillLevel: 90,
    resilience: 20,
    adaptability: 20,
    morale: 20,
    currentTask: null,
    availability: true,
    salary: 70000,
    satisfaction: 50,
  },
  {
    name: 'React Rachel',
    avatarUrl:
      'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/UIUX.png?raw=true',
    role: Role.FRONTEND_DEV,
    expertise: Expertise.JAVASCRIPT,
    ambition: 80,
    loyalty: 5,
    skillLevel: 70,
    resilience: 70,
    adaptability: 40,
    morale: 70,
    currentTask: null,
    availability: true,
    salary: 60000,
    satisfaction: 75,
  },
  {
    name: 'Testcase Tom',
    avatarUrl:
      'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/Noir_QA.png?raw=true',
    role: Role.QA,
    expertise: Expertise.SOFTWARE_TESTING,
    ambition: 20,
    loyalty: 90,
    skillLevel: 80,
    resilience: 20,
    adaptability: 80,
    morale: 65,
    currentTask: null,
    availability: true,
    salary: 55000,
    satisfaction: 75,
  },
];

// {
//   name: 'Agile Alex',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/ProjectManager.png?raw=true',
//   role: Role.PROJECT_MANAGER,
//   expertise: Expertise.PROJECT_MANAGEMENT,
//   ambition: 90,
//   loyalty: 80,
//   skillLevel: 80,
//   resilience: 90,
//   adaptability: 70,
//   morale: 70,
//   currentTask: null,
//   availability: true,
//   salary: 80000,
//   satisfaction: 80,
// },
// {
//   name: 'Design Divina',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/UIUX.png?raw=true',
//   role: Role.UX_UI_DESIGNER,
//   expertise: Expertise.UX_DESIGN,
//   ambition: 70,
//   loyalty: 60,
//   skillLevel: 80,
//   resilience: 80,
//   adaptability: 70,
//   morale: 65,
//   currentTask: null,
//   availability: true,
//   salary: 60000,
//   satisfaction: 75,
// },
// {
//   name: 'Firewall Fred',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/Security.png?raw=true',
//   role: Role.SECURITY_SPECIALIST,
//   expertise: Expertise.CYBER_SECURITY,
//   ambition: 80,
//   loyalty: 70,
//   skillLevel: 80,
//   resilience: 80,
//   adaptability: 80,
//   morale: 70,
//   currentTask: null,
//   availability: true,
//   salary: 65000,
//   satisfaction: 75,
// },
// {
//   name: 'Kubernetes Ken',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/staff_dev.png?raw=true',
//   role: Role.DEVOPS_ENGINEER,
//   expertise: Expertise.JAVA,
//   ambition: 80,
//   loyalty: 60,
//   skillLevel: 90,
//   resilience: 80,
//   adaptability: 70,
//   morale: 70,
//   currentTask: null,
//   availability: true,
//   salary: 75000,
//   satisfaction: 75,
// },
// {
//   name: 'Stats Steve',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/FrontendDev.png?raw=true',
//   role: Role.DATA_SCIENTIST,
//   expertise: Expertise.MACHINE_LEARNING,
//   ambition: 90,
//   loyalty: 70,
//   skillLevel: 90,
//   resilience: 80,
//   adaptability: 80,
//   morale: 75,
//   currentTask: null,
//   availability: true,
//   salary: 80000,
//   satisfaction: 80,
// },
// {
//   name: 'Roadmap Rick',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/ProjectManager.png?raw=true',
//   role: Role.PRODUCT_OWNER,
//   expertise: Expertise.PROJECT_MANAGEMENT,
//   ambition: 90,
//   loyalty: 80,
//   skillLevel: 90,
//   resilience: 80,
//   adaptability: 90,
//   morale: 80,
//   currentTask: null,
//   availability: true,
//   salary: 90000,
//   satisfaction: 85,
// },
// {
//   name: 'Byte Betty',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/FrontendDev.png?raw=true?raw=true',
//   role: Role.BACKEND_DEV,
//   expertise: Expertise.JAVA,
//   ambition: 50,
//   loyalty: 80,
//   skillLevel: 70,
//   resilience: 60,
//   adaptability: 90,
//   morale: 80,
//   currentTask: null,
//   availability: true,
//   salary: 60000,
//   satisfaction: 85,
// },
// {
//   name: 'CSS Cindy',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/FrontendDev.png?raw=true',
//   role: Role.FRONTEND_DEV,
//   expertise: Expertise.JAVASCRIPT,
//   ambition: 60,
//   loyalty: 90,
//   skillLevel: 70,
//   resilience: 80,
//   adaptability: 60,
//   morale: 60,
//   currentTask: null,
//   availability: true,
//   salary: 65000,
//   satisfaction: 65,
// },
// {
//   name: 'Quality Quinn',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/FrontendDev.png?raw=true',
//   role: Role.QA,
//   expertise: Expertise.SOFTWARE_TESTING,
//   ambition: 70,
//   loyalty: 70,
//   skillLevel: 90,
//   resilience: 60,
//   adaptability: 60,
//   morale: 70,
//   currentTask: null,
//   availability: true,
//   salary: 50000,
//   satisfaction: 80,
// },
// {
//   name: 'Organizer Olivia',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/ProjectManager.png?raw=true',
//   role: Role.PROJECT_MANAGER,
//   expertise: Expertise.PROJECT_MANAGEMENT,
//   ambition: 60,
//   loyalty: 70,
//   skillLevel: 90,
//   resilience: 80,
//   adaptability: 90,
//   morale: 80,
//   currentTask: null,
//   availability: true,
//   salary: 85000,
//   satisfaction: 85,
// },
// {
//   name: 'Sketch Sam',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/UIUX.png?raw=true',
//   role: Role.UX_UI_DESIGNER,
//   expertise: Expertise.UX_DESIGN,
//   ambition: 80,
//   loyalty: 70,
//   skillLevel: 60,
//   resilience: 80,
//   adaptability: 80,
//   morale: 75,
//   currentTask: null,
//   availability: true,
//   salary: 65000,
//   satisfaction: 80,
// },
// {
//   name: 'Secure Sarah',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/Security.png?raw=true',
//   role: Role.SECURITY_SPECIALIST,
//   expertise: Expertise.CYBER_SECURITY,
//   ambition: 60,
//   loyalty: 80,
//   skillLevel: 70,
//   resilience: 90,
//   adaptability: 90,
//   morale: 75,
//   currentTask: null,
//   availability: true,
//   salary: 70000,
//   satisfaction: 85,
// },
// {
//   name: 'Infrastructure Ian',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/FrontendDev.png?raw=true',
//   role: Role.DEVOPS_ENGINEER,
//   expertise: Expertise.JAVA,
//   ambition: 90,
//   loyalty: 70,
//   skillLevel: 70,
//   resilience: 80,
//   adaptability: 80,
//   morale: 75,
//   currentTask: null,
//   availability: true,
//   salary: 70000,
//   satisfaction: 80,
// },
// {
//   name: 'Cluster Chris',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/staff_dev.png?raw=true',
//   role: Role.DATA_SCIENTIST,
//   expertise: Expertise.MACHINE_LEARNING,
//   ambition: 60,
//   loyalty: 90,
//   skillLevel: 70,
//   resilience: 90,
//   adaptability: 70,
//   morale: 70,
//   currentTask: null,
//   availability: true,
//   salary: 85000,
//   satisfaction: 85,
// },
// {
//   name: 'Feature Fran',
//   avatarUrl:
//     'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/staff.png?raw=truee',
//   role: Role.PRODUCT_OWNER,
//   expertise: Expertise.PROJECT_MANAGEMENT,
//   ambition: 70,
//   loyalty: 70,
//   skillLevel: 80,
//   resilience: 90,
//   adaptability: 70,
//   morale: 75,
//   currentTask: null,
//   availability: true,
//   salary: 85000,
//   satisfaction: 80,
// },
