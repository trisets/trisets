import Sandbox from '@/pages/sandbox';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';

afterEach(() => cleanup());

test('/sandbox snapshot test', async () => {
  const { container } = render(<Sandbox />);
  expect(container.firstChild).toMatchSnapshot();
});

test('push get-user button', async () => {
  render(<Sandbox />);
  fireEvent.click(screen.getByTestId('get-user'));
  await waitFor(
    () => {
      expect(screen.getByText('ユーザー情報取得失敗！(サインインしてないかも)')).toBeDefined();
    },
    { timeout: 1000 }
  );
});

test('push sign-in button', async () => {
  render(<Sandbox />);
  fireEvent.click(screen.getByTestId('sign-in'));
  await waitFor(
    () => {
      expect(screen.getByText('サインイン成功！')).toBeDefined();
    },
    { timeout: 1000 }
  );
});

test('push get-user button', async () => {
  render(<Sandbox />);
  fireEvent.click(screen.getByTestId('get-user'));
  await waitFor(
    () => {
      expect(screen.getByText('ユーザー情報取得成功！')).toBeDefined();
    },
    { timeout: 1000 }
  );
});
