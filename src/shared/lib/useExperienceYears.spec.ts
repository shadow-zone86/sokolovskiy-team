import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useExperienceYears } from './useExperienceYears'

describe('useExperienceYears', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2025-06-15'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns difference between current year and fromYear', () => {
    expect(useExperienceYears(2020)).toBe(5)
    expect(useExperienceYears(2012)).toBe(13)
    expect(useExperienceYears(2025)).toBe(0)
  })

  it('returns 0 when fromYear is in the future', () => {
    expect(useExperienceYears(2030)).toBe(0)
    expect(useExperienceYears(2026)).toBe(0)
  })

  it('returns 0 when fromYear equals current year', () => {
    expect(useExperienceYears(2025)).toBe(0)
  })

  it('returns non-negative value for past years', () => {
    expect(useExperienceYears(2000)).toBe(25)
    expect(useExperienceYears(1990)).toBe(35)
  })
})
