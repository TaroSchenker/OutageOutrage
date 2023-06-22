Technical Overview
"OUTAGE OUTRAGE" game's back-end logic is developed in Express.js, a popular web application framework for Node.js. It provides API support for handling different game aspects such as staff management, task handling, game events, and tracking the overall game state.

Server Setup & Middleware
Middleware	Description
body-parser	Handles JSON requests
errorHandler	Middleware for handling unhandled errors
The server connects to a database, presumably MongoDB, considering the connectDb function.

Routes and Controllers
Staff Management (staffRouter)
Endpoint	HTTP Method	Controller Method	Description
/api/staff	GET	getAllStaff	Fetches all staff
/api/staff/:staffId	GET	getStaffById	Fetches a specific staff member's details
/api/staff	POST	createStaff	Creates a new staff member
/api/staff/:staffId	PUT	updateStaff	Updates a staff member's details
/api/staff/:staffId	DELETE	deleteStaff	Deletes a staff member
/api/staff/:staffId/assignTask	PUT	assignTask	Assigns a task to a staff member
/api/staff/:staffId/morale	PUT	updateMorale	Updates a staff member's morale
Task Management (taskRouter)
Endpoint	HTTP Method	Controller Method	Description
/api/tasks	GET	getAllTasks	Fetches all tasks
/api/tasks/:taskId	GET	getTaskById	Fetches a specific task's details
/api/tasks	POST	createTask	Creates a new task
/api/tasks/:taskId	PUT	updateTask	Updates a task's details
/api/tasks/:taskId	DELETE	deleteTask	Deletes a task
/api/tasks/:taskId/assignTask	PUT	assignTaskToStaff	Assigns a task to a staff member
Game Events Management (gameEventRouter)
Endpoint	HTTP Method	Controller Method	Description
/api/gameEvents/events	GET	getAllEvents	Fetches all game events
/api/gameEvents/events/:id	GET	getEventById	Fetches a specific game event's details
/api/gameEvents/events	POST	createEvent	Creates a new game event
/api/gameEvents/events/:id	PUT	updateEvent	Updates a game event's details
/api/gameEvents/events/:id	DELETE	deleteEvent	Deletes a game event
Game Management (gameRouter)
Endpoint	HTTP Method	Controller Method	Description
/api/game	GET	getAllGames	Fetches all games
/api/game/:gameId	GET	getGameById	Fetches a specific game's details
/api/game	POST	createGame	Creates a new game
/api/game/:gameId	PUT	updateGame	Updates a game's details
/api/game/:gameId	DELETE	deleteGame	Deletes a game
/api/game/:gameId/staff/:staffId	PUT	addStaffToGame	Adds a staff member to a game
/api/game/:gameId/staff/:staffId	DELETE	removeStaffFromGame	Removes a staff member from a game
/api/game/:gameId/tasks/:taskId	PUT	addTaskToGame	Adds a task to a game
/api/game/:gameId/tasks/:taskId	DELETE	removeTaskFromGame	Removes a task from a game
/api/game/:gameId/events/:eventId	PUT	addEventToGame	Adds an event to a game
/api/game/:gameId/events/:eventId	DELETE	removeEventFromGame	Removes an event from a game
Game State Management (gameStateRouter)
Endpoint	HTTP Method	Controller Method	Description
/api/gameState	POST	initializeGame	Initializes a new game
/api/gameState/:gameId/turn	POST	newTurn	Manages a new turn in the game
/api/gameState/tasks	PUT	processTaskAssignments	Processes task assignments
The game uses catchAsync, a utility function for catching rejected Promises from asynchronous route handlers. This ensures that the application won't crash due to unhandled Promise rejections, improving the robustness of the game.

These technical features support the functionality described in the game mechanics, balance, and features, such as staff and task management, game event handling, and the tracking of the game state.
