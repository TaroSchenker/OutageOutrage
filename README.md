# OutageOutrage

### Welcome to the OutageOutrage project!

### Description 

OutageOutrage is an interactive web application that simulates running a technoogy organisation. The client-side of the application is built using Vite, while the server-side is an Express application. The game revolves around managing tasks and coordinating with staff to ensure the smooth progress of projects.

Key Features:

Game Page: This is where the core gameplay takes place. Players can interact with various game elements, manage tasks, and coordinate with staff members.
Landing Page: Provides an introduction to the game and allows players to start or join a game session.
Task Management: Players can view, assign, and manage tasks related to power restoration.
Staff Coordination: Players can interact with staff members, assign them tasks, and monitor their progress.

### Getting Started

#### Prerequisites
- Ensure you have Docker installed on your machine.
- Node.js (preferably version 16 or higher) should be installed.

#### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/TaroSchenker/OutageOutrage.git
   cd OutageOutrage
   ```

2. Install dependencies for both client and server:
   Navigate to both client and server directories and run:
   ```bash
   npm install
   ```

3. Running the project with Docker:
   - You can use Docker Compose to run both the client and server. Simply run:
     ```bash
     docker-compose up
     ```
     This will start the client on port 3000 and the server on port 3001.

4. Running the project without Docker:
   - If you prefer not to use Docker, you can use the provided script to start both the client and server. Before running the script, ensure it's executable:
     ```bash
     chmod +x start-both.sh
     ```
   - Then, run the script:
     ```bash
     ./start-both.sh
     ```
     This will open two terminal windows, one for the client and one for the server.

### Client
The client is built using Vite and has the following npm scripts:
- `npm run dev`: Start the development server.
- `npm run build`: Build the client for production.
- `npm run test`: Run tests.
- `npm run lint`: Lint the codebase.

### Server
The server is an Express application and has the following npm scripts:
- `npm start`: Start the server.
- `npm test`: Run tests.
- `npm run lint`: Lint the codebase.
