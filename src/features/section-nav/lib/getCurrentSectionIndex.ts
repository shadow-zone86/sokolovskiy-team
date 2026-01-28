export function getCurrentSectionIndex(
  ratios: Record<string, number>,
  sectionOrder: readonly string[]
): number {
  let maxRatio = 0
  let maxIndex = 0
  sectionOrder.forEach((id, index) => {
    const r = ratios[id] ?? 0
    if (r > maxRatio) {
      maxRatio = r
      maxIndex = index
    }
  })
  return maxIndex
}
