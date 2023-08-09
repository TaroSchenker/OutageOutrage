import { Expertise, IClientStaffData, Role } from "../../types/types";

export const testStaffData: IClientStaffData[] = [{
  _id: '1',
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
    currentTask: '1',
    availability: false,
    salary: 70000,
    satisfaction: 50,
  },
  {
    _id: '2',
    name: 'React Rachel',
    avatarUrl:
      'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/UIUX.png?raw=true',
    role: Role.FRONTEND_DEV,
    expertise: Expertise.JAVASCRIPT,
    ambition: 80,
    loyalty: 5,
    skillLevel: 10,
    resilience: 70,
    adaptability: 40,
    morale: 70,
    currentTask: null,
    availability: true,
    salary: 60000,
    satisfaction: 75,
  },
  {
    _id: '3',
    name: 'Testcase Tom',
    avatarUrl:
      'https://github.com/TaroSchenker/OutageOutrage/blob/main/client/src/assets/images/staff/Noir_QA.png?raw=true',
    role: Role.QA,
    expertise: Expertise.SOFTWARE_TESTING,
    ambition: 20,
    loyalty: 90,
    skillLevel: 30,
    resilience: 20,
    adaptability: 80,
    morale: 65,
    currentTask: '2',
    availability: false,
    salary: 55000,
    satisfaction: 75,
  }];
  
