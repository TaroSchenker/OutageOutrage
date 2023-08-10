"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStateService = void 0;
const types_1 = require("../types/types");
const gameService_1 = require("../services/gameService");
const staffService_1 = require("../services/staffService");
const taskService_1 = require("../services/taskService");
const gameEventService_1 = require("../services/gameEventService");
// import { initGameData } from '../config/initialData/gameEvents';
const tasks_1 = require("../config/initialData/tasks");
const staff_1 = require("../config/initialData/staff");
const gameEvents_1 = require("../config/initialData/gameEvents");
class GameStateService {
    constructor() {
        this.gameService = new gameService_1.GameService();
        this.staffService = new staffService_1.StaffService();
        this.taskService = new taskService_1.TaskService();
        this.gameEventService = new gameEventService_1.GameEventService();
    }
    initializeGame() {
        return __awaiter(this, void 0, void 0, function* () {
            const initialTasks = yield Promise.all(tasks_1.tasks.map((task) => __awaiter(this, void 0, void 0, function* () {
                const createdTask = yield this.taskService.createTask(task);
                return createdTask;
            })));
            const initialStaff = yield Promise.all(staff_1.staff.map((staff) => __awaiter(this, void 0, void 0, function* () {
                return yield this.staffService.createStaff(staff);
            })));
            const initialEvents = yield Promise.all(gameEvents_1.events.map((event) => __awaiter(this, void 0, void 0, function* () {
                return yield this.gameEventService.createEvent(event);
            })));
            // 1. Initialize the IGame object
            // 2. Set the initial game state, including budget, staff list, tasks list, events list etc.
            // 3. Store the game state with the provided id in the database or in-memory storage.
            try {
                //init game data
                const game = yield this.gameService.createGame({
                    budget: 200000,
                    morale: 100,
                    businessImpact: types_1.BusinessImpact.LOW,
                    staff: initialStaff.map((staff) => staff.id),
                    tasks: initialTasks.map((task) => task.id),
                    events: initialEvents.map((event) => event.id),
                    timeRemaining: 180,
                    startingBudget: 20000,
                    totalSpent: 0,
                    timePeriod: 180,
                    websiteHealth: 100, // 0-100
                });
                return game;
            }
            catch (err) {
                console.log(err);
                throw err;
            }
        });
    }
    startNewTurn(gameId) {
        return __awaiter(this, void 0, void 0, function* () {
            let game = yield this.gameService.getGameById(gameId);
            if (!game) {
                throw new Error('Game not found');
            }
            // Decrement the time remaining and process the task assignments
            game.timeRemaining--;
            game = yield this.processTaskAssignments(game);
            //adjust remaining budget
            const dailyCost = yield this.calcualteTurnCost(game);
            game.totalSpent += dailyCost;
            game.budget = game.startingBudget - game.totalSpent;
            //calculate game morale
            const gameMorale = yield this.calculateTotalStaffMorale(game);
            game.morale = gameMorale;
            // Check win/loss conditions
            const result = this.checkWinLossConditions(game);
            console.log('Win / Loss conditions result:', result);
            // Save game state
            yield this.gameService.updateGame(gameId, game);
            return game;
        });
    }
    processTaskAssignments(game) {
        return __awaiter(this, void 0, void 0, function* () {
            // Loop through each task in the game
            for (const taskId of game.tasks) {
                // Fetch the actual task document
                const task = yield this.taskService.getTaskById(taskId.toString());
                // Continue to the next task if this one doesn't exist or isn't assigned to anyone
                if (!task || !task.assignedTo)
                    continue;
                // Fetch the staff member assigned to the task
                let staff = yield this.staffService.getStaffById(task.assignedTo);
                // Continue to the next task if the assigned staff member doesn't exist
                if (!staff)
                    continue;
                // Logic for progressing the task and updating the staff member
                if (task.status !== types_1.TaskStatus.COMPLETED) {
                    task.status = types_1.TaskStatus.IN_PROGRESS;
                    task.assignedTo = staff._id;
                    staff.currentTask = task._id;
                    staff.availability = false;
                    //calcualte morale based on expterise match
                    if (staff.expertise === task.expertiseRequired) {
                        staff.morale += 10;
                    }
                    else {
                        staff.morale -= 30;
                    }
                    // calcualte task progress based on staff productivity. Minimum 0 value.
                    const staffProductivity = Math.max(0, staff.skillLevel * 3 + staff.resilience + staff.morale); //potential 500 total
                    console.log('name productivity', staff.name, staffProductivity);
                    task.progress += Math.floor((staffProductivity / task.complexity) * 2);
                    console.log('Task progress', task.progress);
                    if (task.progress >= task.timeToComplete) {
                        task.progress = task.timeToComplete;
                        task.status = types_1.TaskStatus.COMPLETED;
                        staff = yield this.staffService.removeTask(staff._id);
                    }
                    // Save the updates
                    if (!staff)
                        continue;
                    yield this.staffService.updateStaff(staff._id, staff);
                    yield this.taskService.updateTask(task._id, task);
                }
            }
            // Return the updated game
            return game;
        });
    }
    calcualteTurnCost(game) {
        return __awaiter(this, void 0, void 0, function* () {
            const staffIds = this.objectIdtoStringId(game.staff);
            const cost = yield this.staffService.calculateTotalStaffCost(staffIds);
            return Math.floor(cost / 220);
        });
    }
    calculateTotalStaffMorale(game) {
        return __awaiter(this, void 0, void 0, function* () {
            const staffIds = this.objectIdtoStringId(game.staff);
            const gameMorale = yield this.staffService.calculateTotalStaffMorale(staffIds);
            return gameMorale;
        });
    }
    handleStaffReduction(game) {
        return __awaiter(this, void 0, void 0, function* () {
            // 1. Update the staff list based on any reductions made by the player.
            // 2. Adjust the budget based on the change in staff salaries.
            // 3. Update any tasks that were assigned to the reduced staff.
            // 4. Save these changes to the game state in the database or in-memory storage.
            if (game.staff.length > 0) {
                game.staff.pop();
            }
            return game;
        });
    }
    updateStaffMorale(game) {
        return __awaiter(this, void 0, void 0, function* () {
            // 1. Update the morale of each staff member based on the events and decisions made during the game (e.g., staff reductions, successful task completion).
            // 2. Apply any effects of changes in morale (e.g., staff productivity changes, staff might leave if morale gets too low).
            // 3. Save these changes to the game state in the database
            return game;
        });
    }
    handleEvents(game) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Add your code here
            // TODO:
            // 1. Process any events that are triggered in the current turn (could be random or based on specific conditions in the game state).
            // 2. Update the game state based on the effects of these events (e.g., changes in budget, staff morale, new tasks).
            // 3. Save these changes to the game state in the database or in-memory storage.
            return game;
        });
    }
    checkWinLossConditions(game) {
        if (game.budget <= 0) {
            return 'LOSS';
        }
        else if (game.morale <= 0) {
            return 'LOSS';
        }
        else if (game.timeRemaining <= 0) {
            return 'WIN';
        }
        return 'ONGOING';
    }
    objectIdtoStringId(id) {
        return id.map((id) => id.toString());
    }
}
exports.GameStateService = GameStateService;
