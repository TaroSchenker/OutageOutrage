import { BusinessImpact, IGame } from '../types/types';
import { GameService } from '../services/gameService';
import { StaffService } from '../services/staffService';
import { TaskService } from '../services/taskService';
import { GameEventService } from '../services/gameEventService';
// import { initGameData } from '../config/initialData/gameEvents';

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
    // 1. Initialize the IGame object with the provided gameData.
    // 2. Set the initial game state, including budget, staff list, tasks list, events list etc.
    // 3. Store the game state with the provided id in the database or in-memory storage.
    try {
      //Create entries for staff, task, gameEvents
      const staff = await this.staffService.getAllStaff();
      const tasks = await this.taskService.getAllTasks();
      const events = await this.gameEventService.getAllEvents();

      let game = await this.gameService.createGame({
        budget: 9999900,
        morale: 100,
        businessImpact: BusinessImpact.LOW,
        staff: staff.map((staff) => staff.id),
        tasks: tasks.map((task) => task.id),
        events: events.map((event) => event.id),
        timeRemaining: 180,
        startingBudget: 1000000,
        timePeriod: 180,
      });

      // // Create staff, tasks, and game events
      // const createdStaffPromises = staff.map((staffMember) =>
      //   this.staffService.createStaff(staffMember),
      // );
      // const createdTasksPromises = tasks.map((task) =>
      //   this.taskService.createTask(task),
      // );
      // const createdGameEventsPromises = gameEvents.map((gameEvent) =>
      //   this.gameEventService.createEvent(gameEvent),
      // );

      // Wait for the promises to resolve
      // const createdStaff = await Promise.all(createdStaffPromises);
      // const createdTasks = await Promise.all(createdTasksPromises);
      // const createdGameEvents = await Promise.all(createdGameEventsPromises);
      // console.log('create staff', createdStaff);
      // Create the game with the created staff, tasks, and game events

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
    // 4. Save the new game state in the database or in-memory storage.
    try {
      const game = await this.gameService.getGameById(gameId);
      if (!game) {
        throw new Error('Game not found');
      }
      console.log('***************************');
      console.log('***************************');
      console.log('<---STARTING GAME DATA>----');
      //decrease time remaining by 1 day;
      game.timeRemaining--;

      console.log('i am the  game state', game.timeRemaining);
      // // Update task assignments
      // game = await this.processTaskAssignments(game);
      // console.log('Processed Tasks in gameState', game);
      // // Check win/loss conditions
      // const result = this.checkWinLossConditions(game);
      // console.log('Win / Loss conditions result:', result);

      // // Save game state
      // await this.gameService.updateGame(gameId, game);

      return game;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  // async processTaskAssignments(game: IGame): Promise<IGame> {
  // TODO:
  // 1. Process the assignments made by the player during the turn.
  // 2. Update the status of the tasks (e.g., completed, in-progress, not-started).
  // 3. Update the workload of the staff based on the assigned tasks.
  // 4. Save these changes to the game state in the database or in-memory storage.

  //   console.log('Process task assignments');

  //   // Iterate over all tasks

  //   const tasks = this.taskService.;
  //   if (tasks) {
  //     tasks.forEach((task) => {
  //       console.log('for each task', task);
  //       // If the task is assigned to a staff member and not completed
  //       if (task.assignedTo && task.status !== TaskStatus.COMPLETED) {
  //         const staff = game.staff.find(
  //           (staff) => staff._id === task.assignedTo,
  //         );
  //         if (staff) {
  //           // Reduce timeToComplete based on staff's skill level
  //           task.timeToComplete -= staff.skillLevel;
  //           console.log('task time remaining', task.timeToComplete);
  //         }

  //         // If the task is now complete, mark it as such
  //         if (task.timeToComplete <= 0) {
  //           task.status = TaskStatus.COMPLETED;
  //         }
  //       }
  //     });
  //   }

  //   return game;
  // }

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
    // 3. Save these changes to the game state in the database or in-memory storage.
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
    // TODO:
    // 1. Check if the current game state matches any of the win or loss conditions (e.g., budget runs out, all tasks are completed, staff morale drops to zero).
    // 2. If a win or loss condition is met, update the game status and trigger the appropriate game over sequence.
    // 3. Save any changes to the game state in the database or in-memory storage.
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
