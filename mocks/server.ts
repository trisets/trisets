// eslint-disable-next-line import/no-extraneous-dependencies
import { setupServer } from 'msw/node';
import Handlers from './handlers';

export const server = setupServer(...Handlers);