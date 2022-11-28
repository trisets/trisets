import Sample3 from '@/pages/sample3';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

test('sample2', () => {
  const { container } = render(<Sample3 />);
  expect(container.firstChild).toMatchSnapshot();
});
