import { multiply } from "./mathOperations";

describe('Multiply function works correctly', () => {
  it('Correct return type', () => {
    expect(typeof multiply(0.9, 0.1)).toBe('number')
  })
  it('Correct multiplying', () => {
    expect(multiply(2, 3)).toBe(6)
  })
  it('Correct multiplying float numbers', () => {
    expect(multiply(0.1, 0.2)).toBe(0.02)
  })
  it('Correct multiplying big number', () => {
    expect(multiply(10000000000000000, 2000000000000000)).toBe(20000000000000000000000000000000)
  })
})

// 123456789ABCDEF
// 000000000000000 15 zeros