import {
  BusinessImpact,
  IGame,
  IGameEvent,
  IStaff,
  ITask,
  TaskStatus,
} from '../types/types';
import { GameService } from '../services/gameService';
import { StaffService } from '../services/staffService';
import { TaskService } from '../services/taskService';
import { GameEventService } from '../services/gameEventService';
// import { initGameData } from '../config/initialData/gameEvents';
import { tasks as preCreatedTasks } from '../config/initialData/tasks';
import { staff as preCreatedStaff } from '../config/initialData/staff';
import { events as preCreatedEvents } from '../config/initialData/gameEvents';

export class GameStateService {
  private gameService: GameService;
  private staffService: StaffService;
  private taskService: TaskService;
  private gameEventService: GameEventService;

  constructor() {
    this.gameService = new GameService();
    this.staffService = new StaffService();
    this.taskService = new TaskService();
    this.gameEventService = new GameEventService();
  }

  async initializeGame(): Promise<IGame> {
    const initialTasks = await Promise.all(
      preCreatedTasks.map(async (task): Promise<ITask> => {
        const createdTask = await this.taskService.createTask(task);
        return createdTask;
      }),
    );
    const initialStaff = await Promise.all(
      preCreatedStaff.map(async (staff): Promise<IStaff> => {
        return await this.staffService.createStaff(staff);
      }),
    );
    const initialEvents = await Promise.all(
      preCreatedEvents.map(async (event): Promise<IGameEvent> => {
        return await this.gameEventService.createEvent(event);
      }),
    );
    // 1. Initialize the IGame object
    // 2. Set the initial game state, including budget, staff list, tasks list, events list etc.
    // 3. Store the game state with the provided id in the database or in-memory storage.
    try {
      //init game data
      const game = await this.gameService.createGame({
        budget: 20000,
        morale: 100,
        businessImpact: BusinessImpact.LOW,
        staff: initialStaff.map((staff) => staff.id),
        tasks: initialTasks.map((task) => task.id),
        events: initialEvents.map((event) => event.id),
        timeRemaining: 180, // 180 days = 6 months
        startingBudget: 20000,
        totalSpent: 0,
        timePeriod: 180, // 180 days = 6 months
        websiteHealth: 100, // 0-100
      });

      return game;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async startNewTurn(gameId: string): Promise<IGame> {
    // Fetch the game
    let game = await this.gameService.getGameById(gameId);

    if (!game) {
      throw new Error('Game not found');
    }

    // Decrement the time remaining and process the task assignments
    game.timeRemaining--;
    game = await this.processTaskAssignments(game);

    // Check win/loss conditions
    const result = this.checkWinLossConditions(game);
    console.log('Win / Loss conditions result:', result);

    // Save game state
    await this.gameService.updateGame(gameId, game);

    return game;
  }

  async processTaskAssignments(game: IGame): Promise<IGame> {
    // Loop through each task in the game
    for (const taskId of game.tasks) {
      // Fetch the actual task document
      const task = await this.taskService.getTaskById(taskId.toString());

      // Continue to the next task if this one doesn't exist or isn't assigned to anyone
      if (!task || !task.assignedTo) continue;

      // Fetch the staff member assigned to the task
      const staff = await this.staffService.getStaffById(task.assignedTo);

      // Continue to the next task if the assigned staff member doesn't exist
      if (!staff) continue;

      // Logic for progressing the task and updating the staff member
      if (task.status !== TaskStatus.COMPLETED) {
        task.status = TaskStatus.IN_PROGRESS;

        task.assignedTo = staff._id;
        staff.currentTask = task._id;
        //calcualte morale based on expterise match
        if (staff.expertise === task.expertiseRequired) {
          staff.morale += 10;
        } else {
          staff.morale -= 10;
        }
        // calcualte task progress based on staff productivity
        const staffProductivity: number =
          staff.skillLevel * 3 + staff.resilience + staff.morale; //potential 500 total
        task.progress += Math.floor((staffProductivity / task.complexity) * 2);
        if (task.progress > task.timeToComplete)
          task.progress = task.timeToComplete;
        // If the task is now complete, mark it as such
        console.log(
          'timeToComplete',
          task.timeToComplete,
          'progress',
          task.progress,
        );
        if (task.timeToComplete <= task.progress) {
          task.status = TaskStatus.COMPLETED;
        }

        // Save the updates
        await this.staffService.updateStaff(staff._id, staff);
        await this.taskService.updateTask(task._id, task);
      }
    }

    // Return the updated game
    return game;
  }

  async handleStaffReduction(game: IGame): Promise<IGame> {
    // 1. Update the staff list based on any reductions made by the player.
    // 2. Adjust the budget based on the change in staff salaries.
    // 3. Update any tasks that were assigned to the reduced staff.
    // 4. Save these changes to the game state in the database or in-memory storage.
    if (game.staff.length > 0) {
      game.staff.pop();
    }

    return game;
  }

  async updateStaffMorale(game: IGame): Promise<IGame> {
    // 1. Update the morale of each staff member based on the events and decisions made during the game (e.g., staff reductions, successful task completion).
    // 2. Apply any effects of changes in morale (e.g., staff productivity changes, staff might leave if morale gets too low).
    // 3. Save these changes to the game state in the database
    return game;
  }

  async handleEvents(game: IGame): Promise<IGame> {
    // TODO: Add your code here
    // TODO:
    // 1. Process any events that are triggered in the current turn (could be random or based on specific conditions in the game state).
    // 2. Update the game state based on the effects of these events (e.g., changes in budget, staff morale, new tasks).
    // 3. Save these changes to the game state in the database or in-memory storage.
    return game;
  }

  checkWinLossConditions(game: IGame): 'WIN' | 'LOSS' | 'ONGOING' {
    if (game.budget <= 0) {
      return 'LOSS';
    } else if (game.morale <= 0) {
      return 'LOSS';
    } else if (game.timeRemaining <= 0) {
      return 'WIN';
    }
    return 'ONGOING';
  }
}
