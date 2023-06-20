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
        budget: 9999900,
        morale: 100,
        businessImpact: BusinessImpact.LOW,
        staff: initialStaff.map((staff) => staff.id),
        tasks: initialTasks.map((task) => task.id),
        events: initialEvents.map((event) => event.id),
        timeRemaining: 180,
        startingBudget: 100,
        timePeriod: 180,
      });

      return game;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async startNewTurn(gameId: string): Promise<IGame> {
    // 1. Update the game turn state (you could be tracking turns with a simple counter).
    // 2. Refresh the available tasks and events (according to the game logic).
    // 3. Update the budget based on any recurring expenses (like staff salaries).
    // 4. Save the new game state in the database.
    try {
      let game = await this.gameService.getGameById(gameId);
      if (!game) {
        throw new Error('Game not found');
      }
      console.log('***************************');
      console.log('***************************');
      console.log('<--- STARTING NEW TURN DATA ---->');
      //decrease time remaining by 1 day;
      game.timeRemaining--;
      game = await this.gameService.updateGame(gameId, game);

      if (!game) {
        throw new Error('Game not found');
      }

      game = await this.processTaskAssignments(game);

      if (!game) {
        throw new Error('Game not found');
      }
      // Check win/loss conditions
      const result = this.checkWinLossConditions(game);
      console.log('Win / Loss conditions result:', result);

      // // Save game state
      // await this.gameService.updateGame(gameId, game);

      return game;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async processTaskAssignments(game: IGame): Promise<IGame> {
    // TODO:
    // 1. Process the assignments made by the player during the turn.
    // 2. Update the status of the tasks (e.g., completed, in-progress, not-started).
    // 3. Update the workload of the staff based on the assigned tasks.
    // 4. Save these changes to the game state in the database or in-memory storage.
    console.log('Process task assignments');
    game.tasks.forEach(async (task) => {
      const retrievedTask = await this.taskService.getTaskById(String(task));
      if (!retrievedTask) {
        throw new Error('Game not found');
      }
      // If the task is assigned to a staff member and not completed
      if (
        retrievedTask.assignedTo &&
        retrievedTask.status !== TaskStatus.COMPLETED
      ) {
        const assignedStaffId = game.staff.find(
          (staff) => String(staff) === retrievedTask.assignedTo,
        );
        const staff = await this.staffService.getStaffById(
          String(assignedStaffId),
        );
        if (staff) {
          retrievedTask.timeToComplete -= 2;
        }
        // If the task is now complete, mark it as such
        if (retrievedTask.timeToComplete <= 0) {
          retrievedTask.status = TaskStatus.COMPLETED;
        }
        void (await this.taskService.updateTask(
          retrievedTask._id,
          retrievedTask,
        ));
      }
    });

    return game;
  }

  async handleStaffReduction(game: IGame): Promise<IGame> {
    // TODO: Add your code here
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
    // TODO: Add your code here
    //     TODO:
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
