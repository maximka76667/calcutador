import add from '../utils/add'

describe('Add function works correctly', () => {
  it('Correct adding', () => {
    expect(add(2, 3)).toBe(5)
  })
  it('Correct adding float numbers', () => {
    expect(add(3.9999999995, 1.5000000005)).toBe(5.5)
    expect(add(0.1, 0.2)).toBe(0.3)
    expect(add(0.000001, 0.000002)).toBe(0.000003)
    expect(add(0.0000000000001, 0.0000000000002)).toBe(0.0000000000003)
  })
  it('Correct return type', () => {
    expect(typeof add(0.9, 0.1)).toBe('number')
  })
})