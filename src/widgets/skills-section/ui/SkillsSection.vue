<script setup lang="ts">
defineOptions({ name: 'VisitSkillsSection' })
/**
 * Виджет: секция «Навыки и подход» — блоки с личными качествами, подходом, навыками.
 */
import { siteContent } from '@/shared/config/siteContent'

const { skillsTitle, skillsLead, skillsBlocks } = siteContent
</script>

<template>
  <section
    :id="siteContent.sections.skills"
    class="visit-skills"
    aria-labelledby="visit-skills-title"
  >
    <h2 id="visit-skills-title" class="visit-skills__title">
      {{ skillsTitle }}
    </h2>
    <p v-if="skillsLead" class="visit-skills__lead">
      {{ skillsLead }}
    </p>
    <div class="visit-skills__grid">
      <article
        v-for="block in skillsBlocks"
        :key="block.title"
        class="visit-skills__card"
      >
        <h3 class="visit-skills__card-title">
          {{ block.title }}
        </h3>
        <ul class="visit-skills__list">
          <li
            v-for="(item, i) in block.items"
            :key="i"
            class="visit-skills__item"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.visit-skills {
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

.visit-skills__title {
  margin: 0 0 $spacing-2;
  font-size: 1.5rem;
  font-weight: 700;
  color: $visit-text;
  line-height: 1.25;

  @include media-min('md') {
    font-size: 1.75rem;
  }
}

.visit-skills__lead {
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

.visit-skills__grid {
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

.visit-skills__card {
  @include flex-col($spacing-3, flex-start, flex-start);
  position: relative;
  padding: $spacing-4 $spacing-4 $spacing-4 ($spacing-4 + 20px);
  background: $visit-bg-soft;
  border: 1px solid $visit-border;
  border-radius: 8px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: $spacing-4;
    width: 3px;
    height: 28px;
    background: $visit-nav-line;
    border-radius: 0 2px 2px 0;
  }

  @include media-min('md') {
    padding: $spacing-5 $spacing-5 $spacing-5 ($spacing-5 + 24px);

    &::before {
      height: 32px;
      top: $spacing-5;
    }
  }
}

.visit-skills__card-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: $visit-accent;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.visit-skills__list {
  margin: 0;
  padding-left: 1.25em;
  list-style: disc;
}

.visit-skills__item {
  margin-bottom: $spacing-1;
  font-size: 0.875rem;
  line-height: 1.5;
  color: $visit-text-muted;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
