import { deduct } from '../utils/mathOperations'

describe('Deduct function works correctly', () => {
  it('Correct return type', () => {
    expect(typeof deduct(0.9, 0.1)).toBe('number')
  })
  it('Correct deducting', () => {
    expect(deduct(3, 2)).toBe(1)
    expect(deduct(3, 3)).toBe(0)
    expect(deduct(2, 3)).toBe(-1)
  })
  it('Correct deducting float numbers', () => {
    expect(deduct(6.0000000005, 1.0000000005)).toBe(5)
    expect(deduct(0.3, 0.2)).toBe(0.1)
    // expect(deduct(0.000001, 0.000002)).toBe(0.000003)
    // expect(deduct(0.0000000000001, 0.0000000000002)).toBe(0.0000000000003)
    // expect(add(0.1000000000001, 0.20000000000002)).toBe(0.30000000000003)
    // expect(deduct(0.00000000000000001, 0.00000000000000002)).toBe(0.00000000000000003)
    // expect(add(0.10000000000000001, 0.20000000000000002)).toBe(0.30000000000000003)
  })
  it('Correct deducting big number', () => {
    expect(deduct(15000000000000000, 10000000000000000)).toBe(5000000000000000)
  })
})

// 123456789ABCDEF
// 000000000000000 15 zeros