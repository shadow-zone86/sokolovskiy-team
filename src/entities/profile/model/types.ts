export interface ProfileMetrics {
  experienceYears: number
  projectsCount: number
  projectsLabel: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  metrics: ProfileMetrics
}
