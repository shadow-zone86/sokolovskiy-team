<template>
  <div class="metrics-grid">
    <article
      v-for="(metric, index) in metrics"
      :key="metric.key"
      class="metrics-grid__card"
    >
      <span
        class="metrics-grid__number"
        aria-hidden="true"
      >
        {{ String(index + 1).padStart(2, '0') }}
      </span>
      <span class="metrics-grid__value">{{ getMetricValue(metric, profile, experienceYears) }}</span>
      <span class="metrics-grid__label">{{ metric.label }}</span>
    </article>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useExperienceYears } from '@/shared/lib/useExperienceYears'
import { SITE_CONTENT_STORE } from '@/shared/config'
import { getMetricValue } from '../lib/getMetricValue'

defineOptions({ name: 'MetricsGrid' })

const { content } = inject(SITE_CONTENT_STORE)!
const { profile, metrics } = content
const experienceYears = useExperienceYears(profile.experienceFromYear)
</script>

<style scoped lang="scss">
.metrics-grid {
  display: grid;
  gap: $spacing-4;
  width: 100%;
  max-width: $breakpoint-2xl;

  @include media-min('sm') {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-5;
  }

  @include media-min('lg') {
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-6;
  }

  @include media-min('xl') {
    grid-template-columns: repeat(5, 1fr);
  }
}

.metrics-grid__card {
  @include flex-col($spacing-2, flex-start, flex-start);
  position: relative;
  padding: $spacing-4 $spacing-4 $spacing-4 ($spacing-4 + 20px);
  background: $visit-bg-soft;
  border: 1px solid $visit-border;
  border-radius: 8px;
  min-height: 100px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: $spacing-4;
    width: 3px;
    height: 32px;
    background: $visit-nav-line;
    border-radius: 0 2px 2px 0;
  }

  @include media-min('md') {
    padding: $spacing-5 $spacing-5 $spacing-5 ($spacing-5 + 24px);
    min-height: 120px;

    &::before {
      height: 40px;
      top: $spacing-5;
    }
  }
}

.metrics-grid__number {
  position: absolute;
  top: $spacing-3;
  right: $spacing-3;
  font-size: 0.6875rem;
  font-weight: 600;
  color: $visit-text-muted;
  opacity: 0.7;
}

.metrics-grid__value {
  font-size: 1.75rem;
  font-weight: 700;
  color: $visit-accent;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @include media-min('md') {
    font-size: 2rem;
  }
}

.metrics-grid__label {
  font-size: 0.875rem;
  line-height: 1.4;
  color: $visit-text-muted;
}
</style>
