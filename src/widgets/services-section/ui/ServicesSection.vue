<template>
  <section
    :id="content.sections.services"
    class="visit-services"
    aria-labelledby="visit-services-title"
  >
    <h2
      id="visit-services-title"
      class="visit-services__title"
    >
      {{ content.servicesTitle }}
    </h2>
    <div class="visit-services__list">
      <article
        v-for="item in services"
        :key="item.id"
        class="visit-services__item"
      >
        <div class="visit-services__number-wrap">
          <span class="visit-services__number">{{ item.id }}</span>
        </div>
        <p class="visit-services__item-title">
          {{ item.title }}
        </p>
        <p class="visit-services__desc">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'VisitServicesSection' })

const { content } = inject(SITE_CONTENT_STORE)!
const { services } = content
</script>

<style scoped lang="scss">
.visit-services {
  @include flex-col($spacing-0, stretch, center);
  justify-content: center;
  @include padding-all($spacing-4);
  border-top: 1px solid $visit-border;

  @include media-min('lg') {
    @include padding-x($page-padding-x);
    @include padding-y($spacing-8);
  }
}

.visit-services__title {
  margin: 0 0 $spacing-5;
  font-size: 1.5rem;
  font-weight: 700;
  color: $visit-text;
  line-height: 1.25;
}

.visit-services__list {
  display: grid;
  gap: $spacing-5;
  width: 100%;

  @include media-min('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include media-min('lg') {
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-6;
  }
}

.visit-services__item {
  @include flex-col($spacing-2, flex-start, flex-start);
  position: relative;
  padding-left: $spacing-4;
  min-width: 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 24px;
    background: $visit-nav-line;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 22px;
    width: 16px;
    height: 2px;
    background: $visit-nav-line;
  }
}

.visit-services__number-wrap {
  margin-bottom: $spacing-1;
}

.visit-services__number {
  font-size: 1.5rem;
  font-weight: 700;
  color: $visit-text;
  line-height: 1;
}

.visit-services__item-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: $visit-text;
  line-height: 1.35;
}

.visit-services__desc {
  margin: 0;
  font-size: 0.875rem;
  color: $visit-text-muted;
  line-height: 1.5;
}
</style>
