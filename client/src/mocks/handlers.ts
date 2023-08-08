// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
    rest.put('http://localhost:3000/api/tasks/:id/assignTask', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ data: { _id: req.params.id } }));
    }),
    rest.put('http://localhost:3000/api/staff/:id/assignTask', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ data: { _id: req.params.id } }));
    }),
  ];
