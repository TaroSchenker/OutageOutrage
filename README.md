Project Title
=============

OUTAGE OUTRAGE: An Educational and Satirical Tech Management Simulation Game

Table of Contents
-----------------

1.  [Installation](#installation)
2.  [Usage](#usage)
3.  [Testing](#testing)
4.  [API Endpoints](#api-endpoints)
5.  [Game Description](#game-description)
6.  [Gameplay Mechanics and Flow](#gameplay-mechanics-and-flow)
7.  [Game Balance & Features](#game-balance-and-features)
8.  [User Interface and Interaction](#user-interface-and-interaction)
9.  [Visual Style, Assets, and Educational Aspect](#visual-style-assets-and-educational-aspect)
10. [Contributing](#contributing)
11. [License](#license)

Installation
------------

1.  Clone the repository:

    `git clone https://github.com/TaroSchenker/OutageOutrage.git`

2.  Change into the project directory:

    `cd OutageOutrage`

3.  Install the dependencies:

    `npm install`

4.  Create a `.env` file in the root directory and fill it with the necessary environment variables:

    `DB_URL=<your MongoDB connection string>

    <!--- Add other necessary environment variables here. -->`

Usage
-----

To start the server and run the game, use the following command:

`npm start`

Testing
-------

To test the server, run the following command:

`npm test`

API Endpoints
-------------

-   `GET /api/staff` - Get all staff members
-   `POST /api/staff` - Add a new staff member
-   `GET /api/staff/:id` - Get a specific staff member
-   `PUT /api/staff/:id` - Update a specific staff member
-   `DELETE /api/staff/:id` - Delete a specific staff member

Game Description
----------------

"OUTAGE OUTRAGE" is a management simulation game where the player assumes the role of a tech organization manager navigating through a challenging buyout period of 6 months. The primary goal is to keep the website operational while managing staff cuts and rising discontent under a dwindling budget. The game educates about various roles and tasks within a tech organization and satirizes the absurdities of corporate life during transitions.

Gameplay Mechanics and Flow
---------------------------

1.  Game Initialization: The server generates initial tasks, staff, and events at the start.
2.  Starting Budget and Expenses: The player must make strategic decisions immediately due to insufficient initial budget.
3.  Staff Management: Manage a variety of roles with unique traits, affecting their performance and morale.
4.  Tasks and Project Management: Delegate tasks to the staff based on their skills and role. Uncompleted critical tasks may have negative consequences.
5.  Morale System: Manage a morale system affecting productivity, retention, and event likelihood.
6.  Events and Challenges: Random events like budget cuts or staff departures occur, requiring strategy adjustment.
7.  Advanced Mechanics: Gameplay includes handling technical debt, resource allocation, and long-term planning.
8.  Win/Loss Conditions: Game ends in loss if the website goes offline, all staff leave, morale hits zero, or if critical tasks pile up. The win condition is maintaining functionality until the buyout completes.
9.  Communication with the Server: The game uses APIs and the server backend to handle game logic, store game state, and perform regular updates.

Game Balance & Features
-----------------------

Balancing requires considering factors like task complexity, staff skill level, salaries, morale, event likelihood, and budget. Strategic decisions should be rewarded. Experimentation leading to losses shouldn't be excessively penalized.

Additional features include:

-   Skills Improvement Over Time: Staff improve skills over time, adding strategic depth to task assignments.
-   Tasks Interdependencies: Some tasks depend on others, adding complexity to task assignments.
-   Negotiation with Staff: Option to negotiate with staff members who receive job offers.
-   Performance Metrics: Includes analytics or performance metrics for clearer decision impact understanding.
-   Emergency Fund: Option to set aside an "emergency fund" for quick reaction to unforeseen events.

User Interface and Interaction
------------------------------

The user interface is visually appealing, intuitive, and functional. It includes a top bar with critical information, a main view for staff management, and a sidebar for strategic decisions. The game provides a seamless experience, combining strategy, education, and satire.

Visual Style, Assets, and Educational Aspect
--------------------------------------------

The visual style of the game is flat and simple, with AI-generated assets. Staff cards are represented by AI-generated avatars, tasks, and events by minimalistic icons. The game also serves as an immersive learning experience about running a tech organization.

Contributing
------------

License
-------

MIT License. See [LICENSE](https://chat.openai.com/LICENSE) for details.
