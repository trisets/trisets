import Sample1 from '@/pages/sample1';
import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

test('sample1', () => {
  const { container } = render(<Sample1 />);
  expect(container.firstChild).toMatchSnapshot();
});
