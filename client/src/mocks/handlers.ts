// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
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
];
