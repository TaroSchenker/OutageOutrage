import { Expertise, IStaffData, Role } from "../../../types/types";

const staff: IStaffData[] = [
    {
      name: 'John Doe',
      role: Role.BACKEND_DEV,
      expertise: Expertise.JAVA,
      ambition: 7,
      loyalty: 6,
      skillLevel: 9,
      resilience: 8,
      adaptability: 7,
      morale: 60,
      currentTask: null,
      availability: true,
      salary: 70000,
      satisfaction: 70,
    },
    {
      name: 'Jane Smith',
      role: Role.FRONTEND_DEV,
      expertise: Expertise.JAVASCRIPT,
      ambition: 8,
      loyalty: 7,
      skillLevel: 8,
      resilience: 7,
      adaptability: 8,
      morale: 70,
      currentTask: null,
      availability: true,
      salary: 60000,
      satisfaction: 75,
    },

  ];
  
  export default staff;
