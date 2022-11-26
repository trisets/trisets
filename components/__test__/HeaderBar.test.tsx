/* eslint-disable import/no-extraneous-dependencies */
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import HeaderBar from '../HeaderBar';

// FIXME: vitest.setup.tsで設定できていない
expect.extend(matchers);

afterEach(() => cleanup());

test('HeaderBar snapshot test', () => {
  const { container } = render(<HeaderBar />);
  expect(container.firstChild).toMatchSnapshot();
});

test('User menu', async () => {
  render(<HeaderBar />);
  fireEvent.click(screen.getByTestId('user-icon'));
  await waitFor(
    () => {
      expect(screen.getByTestId('user-menu')).toBeVisible();
    },
    { timeout: 1000 }
  );
});

test('Navigation menu', async () => {
  render(<HeaderBar />);
  fireEvent.click(screen.getByTestId('nav-icon'));
  await waitFor(
    () => {
      expect(screen.getByTestId('nav-menu')).toBeVisible();
    },
    { timeout: 1000 }
  );
});
