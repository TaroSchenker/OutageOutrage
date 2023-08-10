"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
// Import routers
const staffRoutes_1 = __importDefault(require("./routes/staffRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const gameEventRoutes_1 = __importDefault(require("./routes/gameEventRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
const gameStateRoutes_1 = __importDefault(require("./routes/gameStateRoutes"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler")); //
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// Serve static files from the React app
const clientBuildPath = path_1.default.join(__dirname, '../../client/dist');
app.use(express_1.default.static(clientBuildPath));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
(0, db_1.default)();
// //health check
// app.get('/health', async (req: Request, res: Response) => {
//   // ...
// });
// Use routers
app.use('/api/staff', staffRoutes_1.default);
app.use('/api/tasks', taskRoutes_1.default);
app.use('/api/gameEvents', gameEventRoutes_1.default);
app.use('/api/game', gameRoutes_1.default);
app.use('/api/gameState', gameStateRoutes_1.default);
// Error handling middleware
app.use(errorHandler_1.default); // <-- Use error handler
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(clientBuildPath, 'index.html'));
});
exports.default = app;
