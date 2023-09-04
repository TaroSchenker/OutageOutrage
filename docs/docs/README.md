OUTAGE OUTRAGE - The Game

OUTAGE OUTRAGE is an engaging simulation game designed to emulate the challenges of managing a tech organization. The game progresses in turns, representing days or weeks, during which players receive an overview of their organization's current state and are tasked with managing various elements such as tasks, staff, and events.

The goal of the game is to keep the organization's website online during a challenging period of a buyout, managing dwindling budgets, staff cuts, and increasing discontent. The game walks the fine line between education and satire, providing insights into the different roles and tasks within a tech organization while highlighting the absurdities of corporate life during transitions.

Game Mechanics

Game Initialization: Start of the game generates initial tasks, staff, and events.

Starting Budget and Expenses: Players are given a starting budget that does not cover all expenses, prompting immediate strategic decision-making.

Staff Cutting Mechanic: Players can reduce staff or hours to cut expenses, which affects staff morale.

Morale System: A system representing staff morale which impacts productivity, retention, and occurrence of events.

Task Assignment and Completion: Players assign tasks to staff based on their skills. Consequences arise if critical tasks remain uncompleted.

Timed Events and Budget Cuts: Timed events such as budget cuts or staff leaving prompt players to adjust their strategies.

Win/Loss Conditions: The game ends in a loss if the website goes down, staff leave, morale drops to zero, or critical tasks pile up.

Server Communication: APIs and server backend handle game logic, store the current game state, and perform regular updates.

Game Balance & Features

Game balance is achieved by considering factors like task complexity, staff skill level, salaries, morale, event likelihood, and budget. Players are rewarded for strategic decisions and while losses can occur from experimentation, they are not overly penalized. Additional gameplay features include:

Skills Improvement Over Time: Staff members can improve their skills over time as they complete tasks.

Tasks Interdependencies: Some tasks may depend on others, adding an extra layer of strategy.

Negotiation with Staff: Players may negotiate with staff members who receive job offers.

Performance Metrics: Metrics give the player a clearer picture of how their decisions impact the game.

Emergency Fund: Players can set aside a portion of the budget as an "emergency fund" to respond quickly to unforeseen events.

API Collection and Folder Structure

The game utilizes four APIs for game management, staff, game events, and tasks. These APIs manage functionalities like games, staff, tasks, game events, and managing staff morale.

The backend can be divided into various sections like src, tests, and node_modules. Inside the src directory, further categorization includes config, controllers, models, routes, services, and utils.

UI Design and User Experience

The game's UI is visually appealing, intuitive, and functional. It includes a top bar with critical information, a main view for staff management, and a side bar for strategic decisions. The UI allows for task assignment, staff management, handling of events and challenges, tracking game progress, and accessing an in-game knowledge base.

Educational and Satirical Elements

OUTAGE OUTRAGE is not just a game, but also an immersive learning experience about running a tech organization, highlighting the significance of different roles, tasks, and strategic decision-making. At the same time, it incorporates satire through its depiction of corporate life during transitions.

With these specifications, OUTAGE OUTRAGE promises an engaging, educational, and humorous experience for players interested in the tech industry and corporate dynamics. Its engaging

OUTAGE OUTRAGE - Game Documentation

Description

"OUTAGE OUTRAGE" is a unique management simulation game where players assume the role of a tech organization manager during a critical transitional period. The organization is going through a buyout in 6 months with a shrinking budget. The player's goal is to keep the website online during this period while tackling staff cuts and rising discontent.

Gameplay

The game is turn-based, with each turn representing a day or week. Players receive an overview of the current state of their organization at the beginning of each turn and must respond to new tasks, staff situations, and events accordingly.

Game Initialization

The game starts with pre-defined or randomly generated tasks, staff, and events. The initial budget doesn't cover all existing costs, prompting immediate strategic decisions.

Staff Management

Players manage a variety of staff roles, including Frontend Developer, Backend Developer, QA, Project Manager, UX/UI Designer, Security Specialist, etc. Each staff member has individual traits like ambition, loyalty, skill level, resilience, and adaptability.

Tasks and Project Management

Different tasks like bug fixing, new feature implementation, and security patches arise and need to be delegated to staff based on their roles and skill levels. Prioritization and delegation form a crucial part of the gameplay.

Budget and Resources Management

Players are provided with a limited budget and need to make strategic decisions regarding staff allocation, training, and technology investments. Resources can also be spent on initiatives to boost morale, which can impact the staff's productivity and likelihood to stay in the organization.

Morale and Discontent Management

Staff morale impacts the game significantly. Actions such as staff cuts decrease morale, leading to decreased productivity and a higher likelihood of staff leaving the organization.

Events and Challenges

Random events like server crashes, security breaches, key staff receiving job offers, or unexpected budget cuts occur throughout the game, making it more dynamic.

Win/Loss Conditions

The game ends in a loss if the website goes offline, if all staff leave, or if the morale hits zero. The win condition is keeping the website online and the organization functional until the buyout is completed.

Advanced Gameplay Features

Skills Improvement Over Time: Staff members improve their skills over time as they complete tasks, making task assignment a strategic choice.

Tasks Interdependencies: Some tasks depend on others, adding an extra layer of strategy to the task assignment process.

Negotiation with Staff: Players can negotiate with staff members who receive job offers.

Performance Metrics: Includes analytics or performance metrics to give the player a clearer picture of how their decisions impact the game.

Emergency Fund: Players can set aside a portion of the budget as an "emergency fund" that can be used to quickly react to unforeseen events or problems.

Game API and Folder Structure

The game utilizes four APIs for managing games, staff, tasks, and game events. The backend folder structure includes src, tests, node_modules, config, controllers, models, routes, services, and utils.

UI Design and User Experience

The game's UI is visually appealing, intuitive, and functional. Key elements include a top bar with critical information, a main view for staff management, and a side bar for strategic decisions. The UI facilitates task assignment, staff management, handling of events and challenges, and tracking of game progress.

Visual Style and Assets

The visual style is simple and flat, with AI-generated assets. The color palette is muted, with colors primarily denoting task types or event urgency.

Educational Aspect

The game provides an immersive learning experience about running a tech organization. The game includes a "library" or "knowledge base" where players can read about different roles and tasks in a tech organization.

Humor and Satire

The game includes humor and satire through its depiction of corporate life during a buyout, with random events like "corporate mandated team-building exercises" or "CEO motivational speeches" affecting the game.
