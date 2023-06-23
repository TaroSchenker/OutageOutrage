General Layout and Style
The UI is divided into three main sections: Staff Management (left), Task Management (middle), and Budget and Morale Management (right). The entire layout is mobile-responsive, designed with Tailwind CSS's utility classes, offering a sleek and modern look.

Left Section - Staff Management
This area shows a list or grid of cards, each representing an employee. Each card contains:

Avatar: Generated using AI or selected from predefined avatars.
Name
Role
Skills: Presented as a list of tags or icons.
Morale: Represented by an emoji or a gauge indicating the employee's morale level.
Salary: Displayed and formatted as a dollar amount.
Clicking on a card expands it, offering more details about the employee and access to actions such as:

Negotiate terms: Opens a modal where you can adjust salary, role, and hours.
Adjust hours: Allows direct adjustment of an employee's hours, affecting their morale and your budget.
Terminate contract: An action that immediately removes the employee but has a significant impact on morale.
Each card is a self-contained React Component storing its state. The states of all employee components could be lifted to a common parent component or managed using a state management library like Redux or MobX, with data fetched and synchronized using React-Query.

Middle Section - Task Management
This section displays a list or grid of tasks. Each task is represented as a draggable card with the following information:

Task Description
Due Date: Indicated by a calendar icon and date.
Progress Bar: Visually indicates how much of the task has been completed.
Tasks can be dragged and dropped onto employee cards to assign them. If a task is unassigned or needs to be reassigned, it can be dragged back to the task area or to another employee card. A library like react-beautiful-dnd can be used for the drag and drop functionality.

Each task card can be clicked to open a modal with more information about the task, such as its complexity, importance, and which skills are required to complete it.

React-Query can be used to handle fetching task data from the server, as well as syncing, caching, and updating this data.

Right Section - Budget and Morale Management
This area provides two primary indicators:

Budget: Displayed as a numerical value with a progress bar. An "Add to Emergency Fund" button allows the player to add money to the emergency fund.
Morale: Represented as a gauge or progress bar, giving the player an overview of the overall staff morale.
This section also includes a dedicated area for the "Emergency Fund," where players can see the current value and choose to increase or decrease it.

Both the budget and morale indicators are updated in real-time based on player actions and server-side events, using React's state and effect hooks and synchronized with the server via React-Query.

Top Bar - Navigation and Game Status
This area includes navigation buttons for routing to different pages like "Metrics" and "Settings," handled by React Router. The game status is also displayed here, with a countdown to the buyout completion date and a red light indicator that blinks if the website goes offline.

React-Query would handle fetching and updating game status data, with state and effects managed by React and TypeScript ensuring type safety.

End Game
If the player manages to keep the website online and functional until the buyout completes, a victory screen is shown. If the website goes offline for too long, morale drops to zero, or other fail conditions are met, a game over screen is displayed.

Remember, throughout the design, TypeScript will enforce type safety, ensuring a stable and bug-free application. Tailwind CSS will allow for responsive design, so the game looks and functions well on any device size.


Basic Fodler structure
/outage-outrage-game
|-- /public
|   |-- index.html
|   |-- favicon.ico
|-- /src
|   |-- /components
|   |   |-- /StaffManagement
|   |   |   |-- StaffCard.tsx
|   |   |   |-- StaffModal.tsx
|   |   |-- /TaskManagement
|   |   |   |-- TaskCard.tsx
|   |   |   |-- TaskModal.tsx
|   |   |-- /BudgetMoraleManagement
|   |   |   |-- BudgetIndicator.tsx
|   |   |   |-- MoraleIndicator.tsx
|   |   |-- /Navigation
|   |   |   |-- Navbar.tsx
|   |   |-- /EndGame
|   |   |   |-- VictoryScreen.tsx
|   |   |   |-- GameOverScreen.tsx
|   |-- /pages
|   |   |-- HomePage.tsx
|   |   |-- MetricsPage.tsx
|   |   |-- SettingsPage.tsx
|   |-- /hooks
|   |   |-- useFetchStaff.ts
|   |   |-- useFetchTasks.ts
|   |   |-- useGameStatus.ts
|   |-- /api
|   |   |-- staffAPI.ts
|   |   |-- tasksAPI.ts
|   |   |-- gameStatusAPI.ts
|   |-- /types
|   |   |-- index.ts
|   |-- /utils
|   |   |-- index.ts
|   |-- App.tsx
|   |-- index.tsx
|-- package.json
|-- tsconfig.json
|-- tailwind.config.js
|-- postcss.config.js

Notes:

The /public directory holds static files that will be served unchanged to clients.
/components directory contains the various React components used to build the UI. Each component gets its own .tsx file, and related components are grouped into directories.
/pages directory contains the components representing entire pages in the app. These are used by React Router for navigation.
/hooks directory holds custom React hooks for fetching and managing the game's data.
/api directory includes the functions for making API requests.
/types directory is for TypeScript type definitions used across multiple components.
/utils directory includes utility functions used throughout the application.
App.tsx is the main component that holds the entire application.
index.tsx is the entry point of the React application.
package.json is for managing dependencies and scripts.
tsconfig.json is for TypeScript configuration.
tailwind.config.js and postcss.config.js are for Tailwind CSS configuration.
This structure provides a good starting point, but you can certainly adjust it based on your preference or as the project requirements evolve.


/StaffManagement
|-- StaffCard.tsx
|-- StaffAvatar.tsx
|-- StaffDetails.tsx
|-- StaffActions.tsx
|-- StaffModal.tsx

Here, StaffCard.tsx becomes more of a container that arranges and styles these smaller components.

StaffAvatar.tsx: Renders the staff member's avatar.

StaffDetails.tsx: Renders the staff member's name, role, skills, morale, and salary.

StaffActions.tsx: Contains the interactive elements for negotiating terms, adjusting hours, or terminating the contract.



/outage-outrage-game
|-- /src
|   |-- /components
|   |   |-- /StaffManagement
|   |   |   |-- /StaffCard
|   |   |   |   |-- StaffCard.tsx
|   |   |   |   |-- StaffCard.test.tsx
|   |   |   |   |-- StaffCard.module.css
|   |   |   |-- /StaffModal
|   |   |   |   |-- StaffModal.tsx
|   |   |   |   |-- StaffModal.test.tsx
|   |   |   |   |-- StaffModal.module.css
...



