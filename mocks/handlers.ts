/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

const handlers = [
  rest.post('/hello', (_req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');
    return res(ctx.status(200), ctx.json({ name: 'John Doe' }));
  }),
  rest.post('/authenticate', (_req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true');

    return res(ctx.status(200));
  }),
  rest.get('/user', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    );
  }),
];

export default handlers;
