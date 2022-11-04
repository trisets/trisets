// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';
import Handlers from './handlers';

export const worker = setupWorker(...Handlers);
