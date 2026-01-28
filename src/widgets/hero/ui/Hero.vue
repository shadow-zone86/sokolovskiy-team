<script setup lang="ts">
defineOptions({ name: 'VisitHero' })
/**
 * Виджет: герой-блок. Заголовок с акцентом, текст, фото.
 * Использует useExperienceYears из shared — стаж считается автоматически.
 */
import { siteContent } from '@/shared/config/siteContent'

const { hero, profile } = siteContent
</script>

<template>
  <section
    :id="siteContent.sections.hero"
    class="visit-hero"
  >
    <div class="visit-hero__content">
      <h2 class="visit-hero__headline">
        {{ hero.headline }}
      </h2>
      <p class="visit-hero__lead">
        {{ hero.lead }}
      </p>
      <p class="visit-hero__lead visit-hero__lead--more">
        {{ hero.leadMore }}
      </p>
    </div>
    <div class="visit-hero__media">
      <img
        src="/visit.png"
        :alt="profile.name"
        class="visit-hero__photo"
        width="200"
        height="240"
      >
      <div class="visit-hero__caption">
        <strong>{{ profile.name }}</strong>
        <span>{{ profile.title }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.visit-hero {
  @include flex-col(0, stretch, flex-start);
  @include padding-all($spacing-4);
  gap: $spacing-6;

  @include media-min('lg') {
    @include flex-row($spacing-8, flex-start, space-between);
    @include padding-x($page-padding-x);
    @include padding-y($spacing-8);
  }
}

.visit-hero__content {
  @include flex-col($spacing-4, flex-start, flex-start);
  flex: 1;
  min-width: 0;
}

.visit-hero__headline {
  margin: 0;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 700;
  color: $visit-text;
  line-height: 1.25;
}

.visit-hero__highlight {
  color: $visit-accent;
}

.visit-hero__lead {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: $visit-text-muted;
  max-width: 32em;

  @include media-min('md') {
    font-size: 1.0625rem;
  }

  &--more {
    margin-top: $spacing-2;
  }
}

.visit-hero__media {
  @include flex-col($spacing-2, center, center);
  flex-shrink: 0;
}

.visit-hero__photo {
  width: 200px;
  height: 240px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid $visit-border;
}

.visit-hero__caption {
  @include flex-col($spacing-0, center, center);
  text-align: center;
  font-size: 0.875rem;
  color: $visit-text-muted;

  strong {
    color: $visit-text;
    font-size: 1rem;
  }
}
</style>
