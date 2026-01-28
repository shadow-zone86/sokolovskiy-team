<script setup lang="ts">
defineOptions({ name: 'VisitPortfolioSection' })
/**
 * Виджет: примеры работ — карточки проектов/направлений.
 */
import { siteContent } from '@/shared/config/siteContent'

const { portfolioTitle, portfolioLead, portfolio } = siteContent
</script>

<template>
  <section
    :id="siteContent.sections.portfolio"
    class="visit-portfolio"
    aria-labelledby="visit-portfolio-title"
  >
    <h2 id="visit-portfolio-title" class="visit-portfolio__title">
      {{ portfolioTitle }}
    </h2>
    <p v-if="portfolioLead" class="visit-portfolio__lead">
      {{ portfolioLead }}
    </p>
    <div class="visit-portfolio__grid">
      <article
        v-for="item in portfolio"
        :key="item.id"
        class="visit-portfolio__card"
      >
        <span class="visit-portfolio__number" aria-hidden="true">{{ item.id }}</span>
        <h3 class="visit-portfolio__card-title">
          <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="visit-portfolio__link"
          >
            {{ item.title }}
          </a>
          <template v-else>
            {{ item.title }}
          </template>
        </h3>
        <p class="visit-portfolio__desc">
          {{ item.description }}
        </p>
        <span class="visit-portfolio__tech">{{ item.tech }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.visit-portfolio {
  @include flex-col($spacing-0, flex-start, center);
  justify-content: center;
  @include padding-y($spacing-6);
  @include padding-x($spacing-4);
  border-top: 1px solid $visit-border;

  @include media-min('lg') {
    @include padding-x($page-padding-x);
    @include padding-y($spacing-8);
  }
}

.visit-portfolio__title {
  margin: 0 0 $spacing-2;
  font-size: 1.5rem;
  font-weight: 700;
  color: $visit-text;
  line-height: 1.25;

  @include media-min('md') {
    font-size: 1.75rem;
  }
}

.visit-portfolio__lead {
  margin: 0 0 $spacing-6;
  max-width: 40em;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: $visit-text-muted;

  @include media-min('lg') {
    margin-bottom: $spacing-8;
    font-size: 1rem;
  }
}

.visit-portfolio__grid {
  display: grid;
  gap: $spacing-4;
  width: 100%;
  max-width: $breakpoint-2xl;

  @include media-min('sm') {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-5;
  }

  @include media-min('lg') {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-6;
  }
}

.visit-portfolio__card {
  @include flex-col($spacing-3, flex-start, flex-start);
  position: relative;
  padding: $spacing-4 $spacing-4 $spacing-4 ($spacing-4 + 20px);
  background: $visit-bg-soft;
  border: 1px solid $visit-border;
  border-radius: 8px;
  min-height: 140px;

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
    min-height: 160px;

    &::before {
      height: 40px;
      top: $spacing-5;
    }
  }
}

.visit-portfolio__number {
  position: absolute;
  top: $spacing-3;
  right: $spacing-3;
  font-size: 1.25rem;
  font-weight: 700;
  color: $visit-text-muted;
  opacity: 0.6;
}

.visit-portfolio__card-title {
  margin: 0;
  font-size: 1.0625rem;
  font-weight: 600;
  color: $visit-text;
  line-height: 1.3;
}

.visit-portfolio__link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent;
  }
}

.visit-portfolio__desc {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: $visit-text-muted;
}

.visit-portfolio__tech {
  margin-top: auto;
  font-size: 0.75rem;
  font-weight: 500;
  color: $visit-accent;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
