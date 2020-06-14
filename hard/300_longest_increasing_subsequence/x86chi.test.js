const { lengthOfLIS, lowerBound } = require('./x86chi')

describe(`lower bound [1, 3, 6, 8, 10, 14]`, () => {
  const array = [1, 3, 6, 8, 10, 14]
  test('4 expect 2', () => {
    expect(lowerBound(array, 6, 4)).toBe(2)
  })
  test('5 expect 2', () => {
    expect(lowerBound(array, 6, 5)).toBe(2)
  })
  test('9 expect 4', () => {
    expect(lowerBound(array, 6, 9)).toBe(4)
  })
})

describe('Longest Increasing Subsequence', () => {
  const cases = [
    [10, 9, 2, 5, 3, 7, 101, 18],
    [10, 9, 2, 5, 3, 4],
    [6, 2, 5, 1, 7, 4, 8],
  ]
  test(`${cases[0].join(', ')}`, () => {
    expect(lengthOfLIS(cases[0])).toBe(4)
  })
  test(`${cases[1].join(', ')}`, () => {
    expect(lengthOfLIS(cases[1])).toBe(3)
  })
  test(`${cases[2].join(', ')}`, () => {
    expect(lengthOfLIS(cases[2])).toBe(4)
  })
})
