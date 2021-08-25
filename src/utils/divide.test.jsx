import { divide } from "./mathOperations";

describe('Divide function works correctly', () => {
  it('Correct return type', () => {
    expect(typeof divide(0.9, 0.1)).toBe('number')
  })
  it('Correct dividing', () => {
    expect(divide(6, 3)).toBe(2)
  })
  it('Correct dividing float numbers', () => {
    expect(divide(0.6, 0.2)).toBe(3)
    expect(divide(1, 10)).toBe(0.1)
  })
  it('Correct dividing big number', () => {
    expect(divide(10000000000000000, 5)).toBe(2000000000000000)
  })
})

// 123456789ABCDEF
// 000000000000000 15 zeros