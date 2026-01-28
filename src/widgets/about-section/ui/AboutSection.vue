<script setup lang="ts">
defineOptions({ name: 'VisitAboutSection' })
/**
 * Виджет: секция «О себе» — заголовок и абзацы текста.
 */
import { siteContent } from '@/shared/config/siteContent'

const { about } = siteContent
</script>

<template>
  <section :id="siteContent.sections.about" class="visit-about" aria-labelledby="visit-about-title">
    <h2 id="visit-about-title" class="visit-about__title">
      {{ about.title }}
    </h2>
    <div class="visit-about__content">
      <p
        v-for="(paragraph, i) in about.paragraphs"
        :key="i"
        class="visit-about__paragraph"
      >
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.visit-about {
  @include flex-col($spacing-0, flex-start, center);
  justify-content: center;
  @include padding-all($spacing-4);
  border-top: 1px solid $visit-border;

  @include media-min('lg') {
    @include padding-x($page-padding-x);
    @include padding-y($spacing-8);
  }
}

.visit-about__title {
  margin: 0 0 $spacing-4;
  font-size: 1.5rem;
  font-weight: 700;
  color: $visit-text;
  line-height: 1.25;
}

.visit-about__content {
  @include flex-col($spacing-4, flex-start, flex-start);
  max-width: 50em;
}

.visit-about__paragraph {
  margin: 0;
  font-size: 1rem;
  line-height: 1.65;
  color: $visit-text-muted;
}
</style>
