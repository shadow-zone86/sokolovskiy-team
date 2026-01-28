<script setup lang="ts">
/**
 * Страница: сайт-визитка. Композиция виджетов.
 * FSD: страница только собирает виджеты, не содержит бизнес-логики.
 */
import { VisitHeader } from '@/widgets/header'
import { VisitHero } from '@/widgets/hero'
import { VisitAboutSection } from '@/widgets/about-section'
import { VisitServicesSection } from '@/widgets/services-section'
import { VisitKeyMetrics } from '@/widgets/key-metrics'
import { VisitPortfolioSection } from '@/widgets/portfolio-section'
import { VisitPageNav } from '@/widgets/page-nav'
</script>

<template>
  <div class="visit-page">
    <div class="visit-page__screen visit-page__screen--first">
      <VisitHeader />
      <VisitHero />
    </div>
    <main class="visit-main">
      <VisitAboutSection />
      <VisitServicesSection />
      <VisitKeyMetrics />
      <VisitPortfolioSection />
    </main>
    <VisitPageNav />
  </div>
</template>

<style scoped lang="scss">
.visit-page {
  background-color: $visit-bg;
  color: $visit-text;
}

.visit-page__screen--first {
  min-height: 100vh;
  @include flex-col(0, stretch, flex-start);

  :deep(.visit-hero) {
    flex: 1;
    min-height: 0;
  }
}

.visit-main {
  max-width: $breakpoint-2xl;
  margin: 0 auto;
}

.visit-main > * {
  min-height: 100vh;
  box-sizing: border-box;
}
</style>
