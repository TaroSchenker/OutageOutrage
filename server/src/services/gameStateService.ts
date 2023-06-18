import {
  IGame,
  IGameEventData,
  IStaffData,
  ITaskData,
  TaskStatus,
} from '../types/types';
import { GameService } from '../services/gameService';
import { StaffService } from '../services/staffService';
import { TaskService } from '../services/taskService';
import { GameEventService } from '../services/gameEventService';
import { initGameData } from '../config/initialData/gameEvents';

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
    try {
      //Create entries for staff, task, gameEvents
      const staff: IStaffData[] = initGameData.staff;
      const tasks: ITaskData[] = initGameData.tasks;
      const gameEvents: IGameEventData[] = initGameData.events;

      // Create staff, tasks, and game events
      const createdStaffPromises = staff.map((staffMember) =>
        this.staffService.createStaff(staffMember),
      );
      const createdTasksPromises = tasks.map((task) =>
        this.taskService.createTask(task),
      );
      const createdGameEventsPromises = gameEvents.map((gameEvent) =>
        this.gameEventService.createEvent(gameEvent),
      );

      // Wait for the promises to resolve
      const createdStaff = await Promise.all(createdStaffPromises);
      const createdTasks = await Promise.all(createdTasksPromises);
      const createdGameEvents = await Promise.all(createdGameEventsPromises);

      // Create the game with the created staff, tasks, and game events
      const game = await this.gameService.createGame({
        ...initGameData,
        staff: createdStaff,
        tasks: createdTasks,
        events: createdGameEvents,
      });

      console.log('created game', game);
      return game;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async startNewTurn(gameId: string): Promise<IGame> {
    try {
      const game = await this.gameService.getGameById(gameId);
      if (!game) {
        throw new Error('Game not found');
      }

      //decrease time remaining by 1 day;
      game.timeRemaining--;
      // Update task assignments
      this.processTaskAssignments(game._id);

      // Handle staff reduction
      this.handleStaffReduction(game._id);

      // Update staff morale
      this.updateStaffMorale(game._id);

      // Handle events
      this.handleEvents(game._id);

      // Check win/loss conditions
      const result = this.checkWinLossConditions(game._id);
      console.log('Win / Loss conditions result:', result);
      // Save game state
      await this.gameService.updateGame(gameId, game);

      return game;

      // return game;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async processTaskAssignments(game: IGame): Promise<IGame> {
    // TODO: Add your code here
    // Iterate over all tasks
    for (const task of game.tasks) {
      // If the task is assigned to a staff member and not completed
      if (task.assignedTo && task.status !== TaskStatus.COMPLETED) {
        const staff = game.staff.find(
          (staff) => staff.name === task.assignedTo,
        );

        // Reduce timeToComplete based on staff's skill level
        // task.timeToComplete -= staff.skillLevel;
        task.timeToComplete -= 10; // improve the caluclation here based on skill level, morale etc. 

        // If the task is now complete, mark it as such
        if (task.timeToComplete <= 0) {
          task.status = TaskStatus.COMPLETED;
        }
      }
    }
    return game;
  }

  async handleStaffReduction(game: IGame): Promise<IGame> {
    // TODO: Add your code here
    // This is a very basic implementation that reduces staff numbers by 1 each turn
    // Your actual implementation will likely involve more complex logic
    if (game.staff.length > 0) {
      game.staff.pop();
    }

    return game;
    // return 'Staff reductions handled successfully';
  }

  async updateStaffMorale(game: IGame): Promise<IGame> {
    // TODO: Add your code here
    // Again, this is a basic implementation that reduces morale by 1 each turn
    // Your actual implementation will likely involve more complex logic
    for (const staff of game.staff) {
      if (staff.morale > 0) {
        staff.morale--;
      }
    }

    return game;

    // return 'Staff morale updated successfully';
  }

  async handleEvents(game: IGame): Promise<IGame> {
    // TODO: Add your code here
    // Iterate over all active events and apply their effects
    for (let event of game.events) {
      // Reduce morale and budget based on event effects
      game.morale -= event.effectOnMorale;
      game.budget -= event.effectOnBudget;

      // If the event affects tasks, apply the effects
      if (event.effectOnTasks) {
        const task = game.tasks.find(
          (task) => task.type === event.effectOnTasks?.type,
        );
        if (task) {
          // This is a very basic implementation that simply increases the task's timeToComplete
          // Your actual implementation will likely involve more complex logic
          task.timeToComplete += event.effectOnTasks.timeToComplete;
        }
      }
    }
    return game;
  }

  checkWinLossConditions(game: IGame): 'WIN' | 'LOSS' | 'ONGOING' {
    // Check if the game has been won or lost
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
