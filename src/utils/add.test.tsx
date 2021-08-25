import { add } from '../utils/mathOperations'

describe('Add function works correctly', () => {
  it('Correct return type', () => {
    expect(typeof add(0.9, 0.1)).toBe('number')
  })
  it('Correct adding', () => {
    expect(add(2, 3)).toBe(5)
  })
  it('Correct adding float numbers', () => {
    expect(add(3.9999999995, 1.5000000005)).toBe(5.5)
    expect(add(0.1, 0.2)).toBe(0.3)
    expect(add(0.000001, 0.000002)).toBe(0.000003)
    expect(add(0.0000000000001, 0.0000000000002)).toBe(0.0000000000003)
    // expect(add(0.1000000000001, 0.20000000000002)).toBe(0.30000000000003)
    expect(add(0.00000000000000001, 0.00000000000000002)).toBe(0.00000000000000003)
    // expect(add(0.10000000000000001, 0.20000000000000002)).toBe(0.30000000000000003)
  })
  it('Correct adding big number', () => {
    expect(add(15000000000000000, 10000000000000000)).toBe(25000000000000000)
  })
})

// 123456789ABCDEF
// 000000000000000 15 zeros