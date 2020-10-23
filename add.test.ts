import { add } from './index';

const three: number = 3;

test('one', () => {
  expect(add(1, 2)).toEqual(three);
});

// Causes error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'esnext' or 'system', and the 'target' option is set to 'es2017' or higher.
const a = await 1;
