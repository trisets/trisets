import hello from '@/pages/api/hello';
import type { NextApiRequest, NextApiResponse } from 'next';
import { expect, test } from 'vitest';

test('hello', async () => {
  const req = {} as NextApiRequest;
  const res = {} as NextApiResponse;

  hello(req, res);
  expect(res).toEqual({ name: 'John Doe' });
});
