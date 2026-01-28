import { describe, expect, it } from 'vitest'
import { getCurrentSectionIndex } from './getCurrentSectionIndex'

describe('getCurrentSectionIndex', () => {
  const sectionOrder = ['hero', 'about', 'skills', 'services', 'metrics', 'portfolio'] as const

  it('returns index of section with max intersection ratio', () => {
    expect(getCurrentSectionIndex({ hero: 0.8, about: 0.2 }, sectionOrder)).toBe(0)
    expect(getCurrentSectionIndex({ about: 0.9, hero: 0.1 }, sectionOrder)).toBe(1)
    expect(getCurrentSectionIndex({ metrics: 1, portfolio: 0.5 }, sectionOrder)).toBe(4)
  })

  it('returns 0 when ratios are empty', () => {
    expect(getCurrentSectionIndex({}, sectionOrder)).toBe(0)
  })

  it('ignores ids not in sectionOrder', () => {
    expect(getCurrentSectionIndex({ other: 1 }, sectionOrder)).toBe(0)
  })

  it('when tie, returns first max index (order of iteration)', () => {
    expect(getCurrentSectionIndex({ hero: 0.5, about: 0.5 }, sectionOrder)).toBe(0)
  })
})
