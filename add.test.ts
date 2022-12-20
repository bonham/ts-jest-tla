import { add } from './add.js'

// top-level await
const one = await 1

const three = 3

test('one', () => {
  expect(add(one, 2)).toEqual(three)
})
