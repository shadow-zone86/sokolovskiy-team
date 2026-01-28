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
    <MetricsGrid />
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
import { MetricsGrid } from '@/features/metrics-grid'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'VisitKeyMetrics' })

const { content } = inject(SITE_CONTENT_STORE)!
const { metricsTitle, metricsLead, metricsNote } = content
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

</style>
