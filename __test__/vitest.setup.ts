/* eslint-disable import/no-extraneous-dependencies */
import { afterAll, afterEach, beforeAll, expect } from 'vitest';
// NOTE: いつか組み込みのfetchを利用する方針に変えられるかも
import { fetch } from 'whatwg-fetch';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from '../mocks/server';

expect.extend(matchers);
globalThis.fetch = fetch;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
