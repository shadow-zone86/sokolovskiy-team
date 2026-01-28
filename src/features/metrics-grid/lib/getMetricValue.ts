import type { SiteContent } from '@/shared/config'

export function getMetricValue(
  metric: SiteContent['metrics'][number],
  profile: SiteContent['profile'],
  experienceYears: number
): string {
  if (metric.key === 'experienceYears') {
    return String(experienceYears)
  }
  const raw = profile[metric.key as keyof typeof profile]
  const num = typeof raw === 'number' ? raw : 0
  return `${num}${metric.suffix ?? ''}`
}
