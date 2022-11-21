import Sample2 from '@/pages/sample2';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

test('sample2', () => {
  const { container } = render(<Sample2 />);
  expect(container.firstChild).toMatchSnapshot();
});
