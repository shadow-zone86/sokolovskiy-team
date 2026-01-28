/**
 * Сущность: профиль эксперта (имя, роль, метрики).
 * SOLID: интерфейс стабилен, детали — в конфиге.
 */
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
