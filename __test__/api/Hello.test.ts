import hello from '@/pages/api/hello';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendStatusCode } from 'next/dist/server/api-utils';
import { expect, test } from 'vitest';

test('hello', async () => {
  const req = {} as NextApiRequest;
  const res = {
    status: (statusCode: number): object => sendStatusCode(res, statusCode),
  } as NextApiResponse<object>;
  let resData: object = {};
  res.json = (data: object): void => {
    resData = data;
  };

  hello(req, res);
  expect(resData).toEqual({ name: 'John Doe' });
});
