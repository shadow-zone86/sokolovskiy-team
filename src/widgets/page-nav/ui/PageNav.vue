<script setup lang="ts">
defineOptions({ name: 'VisitPageNav' })
/**
 * Виджет: навигация по полноэкранным секциям (страницам).
 * 01 — главная (Hero), 02 — О себе, 03 — Направления, 04 — В цифрах, 05 — Контакты.
 * Слева отображаются номер и название текущей секции при скролле.
 */
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { siteContent } from '@/shared/config/siteContent'

const { nav, sectionOrder } = siteContent

const sectionRatios = ref<Record<string, number>>({})

const currentSectionIndex = computed(() => {
  const ratios = sectionRatios.value
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
})

const currentSectionId = computed(() => sectionOrder[currentSectionIndex.value])
const currentSectionTitle = computed(() => nav.sectionTitles[currentSectionIndex.value])

function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

function formatPageNum(index: number): string {
  return String(index + 1).padStart(2, '0')
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  const elements = sectionOrder
    .map((id) => document.getElementById(id))
    .filter((el): el is HTMLElement => el != null)

  observer = new IntersectionObserver(
    (entries) => {
      const next = { ...sectionRatios.value }
      entries.forEach((entry) => {
        const id = (entry.target as HTMLElement).id
        next[id] = entry.intersectionRatio
      })
      sectionRatios.value = next
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-10% 0px -10% 0px' }
  )

  elements.forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav
    class="visit-nav"
    aria-label="Навигация по странице"
  >
    <div class="visit-nav__left">
      <span
        class="visit-nav__line visit-nav__line--v"
        aria-hidden="true"
      />
      <span class="visit-nav__label visit-nav__label--v">{{ currentSectionTitle }}</span>
      <button
        type="button"
        class="visit-nav__num"
        :aria-label="`Перейти: ${currentSectionTitle}`"
        @click="scrollToSection(currentSectionId)"
      >
        {{ formatPageNum(currentSectionIndex) }}
      </button>
    </div>
    <div class="visit-nav__right">
      <span
        class="visit-nav__line visit-nav__line--v"
        aria-hidden="true"
      />
      <span class="visit-nav__label visit-nav__label--v">{{ nav.scrollDown }}</span>
      <div class="visit-nav__pages">
        <button
          v-for="(sectionId, index) in sectionOrder"
          :key="sectionId"
          type="button"
          class="visit-nav__num"
          :aria-label="`Страница ${formatPageNum(index)}`"
          @click="scrollToSection(sectionId)"
        >
          {{ formatPageNum(index) }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.visit-nav__left,
.visit-nav__right {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  @include flex-col($spacing-2, center, center);
  z-index: 10;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
}

.visit-nav__left {
  left: $spacing-4;
}

.visit-nav__right {
  right: $spacing-4;
}

.visit-nav__pages {
  @include flex-col($spacing-0, center, center);
  gap: $spacing-0;
}

.visit-nav__line {
  background: $visit-nav-line;

  &--v {
    width: 1px;
    min-height: 40px;
  }
}

.visit-nav__label--v {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 0.75rem;
  color: $visit-text-muted;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.visit-nav__num {
  font-size: 0.75rem;
  font-weight: 600;
  color: $visit-accent;
  background: none;
  border: none;
  cursor: pointer;
  padding: $spacing-1;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent-hover;
  }
}

</style>
