export function useExperienceYears(fromYear: number): number {
  const currentYear = new Date().getFullYear()
  return Math.max(0, currentYear - fromYear)
}
