/**
 * Вычисляет стаж в годах от заданного года до текущей даты.
 * SOLID: единственная ответственность — расчёт лет.
 */
export function useExperienceYears(fromYear: number): number {
  const currentYear = new Date().getFullYear()
  return Math.max(0, currentYear - fromYear)
}
