// src/mocks/handlers.js
import { rest } from 'msw';

let callCount = 0;

export const getCallCount = () => callCount;

export const resetCallCount = () => {
  callCount = 0;
};

export const handlers = [
  //assign task staff members
  rest.put(
    'http://localhost:3000/api/tasks/:id/assignTask',
    (req, res, ctx) => {
      const assignedTask = {
        // existing task data goes here, but with the changes applied
        assignedTo: req.params.id, // or whatever staff information you are receiving
      };
      return res(ctx.status(200), ctx.json({ data: assignedTask }));
    },
  ),
  //assign staff member a task
  rest.put(
    'http://localhost:3000/api/staff/:id/assignTask',
    (req, res, ctx) => {
      const updatedStaff = {
        // existing staff data goes here, but with the changes applied
        currentTask: req.params.id, // or whatever task information you are receiving
        availability: false,
      };
      return res(ctx.status(200), ctx.json({ data: updatedStaff }));
    },
  ),
  //remove task from staff member
  rest.put(
    'http://localhost:3000/api/staff/:id/removeTask',
    async (req, res, ctx) => {
      // const { taskId } = await req.json();
      const updatedStaff = {
        // existing staff data goes here, but with the changes applied
        currentTask: '', // or whatever task information you are receiving
        availability: true,
      };
      return res(ctx.status(200), ctx.json({ data: updatedStaff }));
    },
  ),
  //game state - next turn
  rest.post(
    'http://localhost:3001/api/gameState/:gameId/turn',
    (req, res, ctx) => {
      // Assuming the response would be some kind of success message, adjust as needed
      // Log the actual URL that was called
      console.log(
        `Mock server received a POST request to: ${req.url.toString()}`,
      );

      // Log the parameters
      console.log('Request Params:', req.params);
      callCount += 1;
      console.log('call count', callCount);
      return res(ctx.status(200), ctx.json({ data: 'Turn processed' }));
    },
  ),
  //get game by id
  rest.get('http://localhost:3000/api/game/:gameId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: 'got the game by id' }));
  }),
];
