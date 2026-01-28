import { describe, expect, it } from 'vitest'
import { getMetricValue } from './getMetricValue'
import type { SiteContent } from '@/shared/config'

describe('getMetricValue', () => {
  const mockProfile = {
    name: 'Test',
    title: 'Developer',
    tagline: 'Test tagline',
    experienceFromYear: 2012,
    projectsCount: 100,
    technologiesCount: 15,
    teamsLed: 5,
    mentorshipCount: 10,
    resumeUrl: '#',
    resumeLabel: 'Resume',
    resumeDescription: 'Description',
    projectsLabel: 'проектов',
  } as unknown as SiteContent['profile']

  it('returns experienceYears as string when key is experienceYears', () => {
    const metric = { key: 'experienceYears', label: 'лет в разработке' } as const
    expect(getMetricValue(metric, mockProfile, 12)).toBe('12')
    expect(getMetricValue(metric, mockProfile, 0)).toBe('0')
    expect(getMetricValue(metric, mockProfile, 5)).toBe('5')
  })

  it('returns projectsCount with suffix when key is projectsCount', () => {
    const metric = { key: 'projectsCount', suffix: '+', label: 'реализованных проектов' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric, mockProfile, 0)).toBe('100+')
  })

  it('returns technologiesCount with suffix when key is technologiesCount', () => {
    const metric = { key: 'technologiesCount', suffix: '+', label: 'технологий в стеке' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric, mockProfile, 0)).toBe('15+')
  })

  it('returns teamsLed with suffix when key is teamsLed', () => {
    const metric = { key: 'teamsLed', suffix: '+', label: 'команд в роли ведущего разработчика' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric, mockProfile, 0)).toBe('5+')
  })

  it('returns mentorshipCount with suffix when key is mentorshipCount', () => {
    const metric = { key: 'mentorshipCount', suffix: '+', label: 'разработчиков наставничал' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric, mockProfile, 0)).toBe('10+')
  })

  it('returns value without suffix when suffix is not provided', () => {
    const metric = { key: 'experienceYears', label: 'лет в разработке' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric, mockProfile, 100)).toBe('100')
  })

  it('returns "0" when profile key does not exist', () => {
    const metric = {
      key: 'nonExistentKey' as unknown as SiteContent['metrics'][number]['key'],
      label: 'test',
    } as unknown as SiteContent['metrics'][number]
    expect(getMetricValue(metric, mockProfile, 0)).toBe('0')
  })

  it('returns "0" when profile value is not a number', () => {
    const profileWithString = {
      ...mockProfile,
      projectsCount: '100' as unknown as number,
    } as unknown as SiteContent['profile']
    const metric = { key: 'projectsCount', suffix: '+', label: 'реализованных проектов' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric, profileWithString, 0)).toBe('0+')
  })

  it('returns "0" when profile value is undefined', () => {
    const profileWithUndefined = {
      ...mockProfile,
      projectsCount: undefined as unknown as number,
    } as unknown as SiteContent['profile']
    const metric = { key: 'projectsCount', suffix: '+', label: 'реализованных проектов' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric, profileWithUndefined, 0)).toBe('0+')
  })

  it('handles zero values correctly', () => {
    const profileWithZeros = {
      ...mockProfile,
      projectsCount: 0,
      technologiesCount: 0,
    } as unknown as SiteContent['profile']
    const metric1 = { key: 'projectsCount', suffix: '+', label: 'реализованных проектов' } as SiteContent['metrics'][number]
    const metric2 = { key: 'technologiesCount', suffix: '+', label: 'технологий в стеке' } as SiteContent['metrics'][number]
    expect(getMetricValue(metric1, profileWithZeros as unknown as SiteContent['profile'], 0)).toBe('0+')
    expect(getMetricValue(metric2, profileWithZeros as unknown as SiteContent['profile'], 0)).toBe('0+')
  })
})
