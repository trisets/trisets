/* eslint-disable import/no-extraneous-dependencies */
import { afterAll, afterEach, beforeAll } from 'vitest';
import 'whatwg-fetch';
import { server } from '../mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
