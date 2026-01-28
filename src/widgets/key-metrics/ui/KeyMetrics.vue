<template>
  <section
    :id="content.sections.metrics"
    class="visit-metrics"
    aria-labelledby="visit-metrics-title"
  >
    <h2
      id="visit-metrics-title"
      class="visit-metrics__title"
    >
      {{ metricsTitle }}
    </h2>
    <p
      v-if="metricsLead"
      class="visit-metrics__lead"
    >
      {{ metricsLead }}
    </p>
    <div class="visit-metrics__grid">
      <article
        v-for="(metric, index) in metrics"
        :key="metric.key"
        class="visit-metrics__card"
      >
        <span
          class="visit-metrics__number"
          aria-hidden="true"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <span class="visit-metrics__value">{{ getMetricValue(metric) }}</span>
        <span class="visit-metrics__label">{{ metric.label }}</span>
      </article>
    </div>
    <p
      v-if="metricsNote"
      class="visit-metrics__note"
    >
      {{ metricsNote }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useExperienceYears } from '@/shared/lib/useExperienceYears'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'VisitKeyMetrics' })

const { content } = inject(SITE_CONTENT_STORE)!
const { profile, metricsTitle, metricsLead, metricsNote, metrics } = content
const experienceYears = useExperienceYears(profile.experienceFromYear)

function getMetricValue(
  metric: (typeof metrics)[number]
): string {
  if (metric.key === 'experienceYears') {
    return String(experienceYears)
  }
  const raw = profile[metric.key as keyof typeof profile]
  const num = typeof raw === 'number' ? raw : 0
  return `${num}${metric.suffix ?? ''}`
}
</script>

<style scoped lang="scss">
.visit-metrics {
  @include flex-col($spacing-0, flex-start, center);
  justify-content: center;
  @include padding-y($spacing-8);
  @include padding-x($spacing-4);
  border-top: 1px solid $visit-border;

  @include media-min('lg') {
    @include padding-x($page-padding-x);
    @include padding-y($spacing-10);
  }
}

.visit-metrics__title {
  margin: 0 0 $spacing-2;
  font-size: 1.5rem;
  font-weight: 700;
  color: $visit-text;
  line-height: 1.25;

  @include media-min('md') {
    font-size: 1.75rem;
  }
}

.visit-metrics__lead {
  margin: 0 0 $spacing-6;
  max-width: 42em;
  font-size: 1rem;
  line-height: 1.65;
  color: $visit-text-muted;

  @include media-min('lg') {
    margin-bottom: $spacing-8;
    font-size: 1.0625rem;
  }
}

.visit-metrics__grid {
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

.visit-metrics__note {
  margin: $spacing-8 0 0;
  max-width: 38em;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: $visit-text-muted;
  font-style: italic;

  @include media-min('lg') {
    margin-top: $spacing-10;
    font-size: 1rem;
  }
}

.visit-metrics__card {
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

.visit-metrics__number {
  position: absolute;
  top: $spacing-3;
  right: $spacing-3;
  font-size: 0.6875rem;
  font-weight: 600;
  color: $visit-text-muted;
  opacity: 0.7;
}

.visit-metrics__value {
  font-size: 1.75rem;
  font-weight: 700;
  color: $visit-accent;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @include media-min('md') {
    font-size: 2rem;
  }
}

.visit-metrics__label {
  font-size: 0.875rem;
  line-height: 1.4;
  color: $visit-text-muted;
}
</style>
