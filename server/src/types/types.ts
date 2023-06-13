export interface Staff {
    id: string;
    name: string;
    role: string;
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
    staff: Array<Staff>;
    tasks: Array<Task>;
    events: Array<Event>;
    timeRemaining: number;
  }
  