import { describe, expect, it } from 'vitest'
import { formatPageNum } from './formatPageNum'

describe('formatPageNum', () => {
  it('pads with zero for single digit', () => {
    expect(formatPageNum(0)).toBe('01')
    expect(formatPageNum(8)).toBe('09')
  })

  it('returns two digits for 9+', () => {
    expect(formatPageNum(9)).toBe('10')
    expect(formatPageNum(11)).toBe('12')
  })
})
