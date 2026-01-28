<script setup lang="ts">
defineOptions({ name: 'VisitHeader' })
/**
 * Виджет: шапка сайта. Имя + описание слева, контакт и CTA справа.
 * Зависит только от shared (config, ui). SOLID: композиция, не знает о Hero/Services.
 */
import { UiButton } from '@/shared/ui'
import { siteContent } from '@/shared/config/siteContent'

const { profile, contacts } = siteContent
</script>

<template>
  <header class="visit-header">
    <div class="visit-header__brand">
      <h1 class="visit-header__name">
        {{ profile.name }}
      </h1>
      <p class="visit-header__tagline">
        {{ profile.tagline }}
      </p>
    </div>
    <div class="visit-header__actions">
      <div class="visit-header__contacts">
        <a :href="contacts.phoneHref" class="visit-header__link">{{ contacts.phone }}</a>
        <a :href="contacts.vkUrl" target="_blank" rel="noopener noreferrer" class="visit-header__link">VK</a>
        <a :href="contacts.telegramUrl" target="_blank" rel="noopener noreferrer" class="visit-header__link">{{ contacts.telegramLabel }}</a>
      </div>
      <UiButton :href="`#${siteContent.sections.hero}`" variant="primary">
        {{ contacts.ctaConsult }}
      </UiButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
.visit-header {
  @include flex-between(row, center);
  @include padding-y($spacing-4);
  @include padding-x($spacing-4);
  border-bottom: 1px solid $visit-border;

  @include media-min('lg') {
    @include padding-x($page-padding-x);
  }
}

.visit-header__brand {
  @include flex-col($spacing-1, flex-start, flex-start);
}

.visit-header__name {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: $visit-text;
  line-height: 1.2;

  @include media-min('md') {
    font-size: 1.5rem;
  }
}

.visit-header__tagline {
  margin: 0;
  font-size: 0.875rem;
  color: $visit-text-muted;
  line-height: 1.4;
}

.visit-header__actions {
  @include flex-col($spacing-2, flex-end, flex-end);
  gap: $spacing-2;
}

.visit-header__contacts {
  @include flex-row($spacing-3, center, flex-end);
  flex-wrap: wrap;
  gap: $spacing-2;
}

.visit-header__link {
  font-size: 0.9375rem;
  color: $visit-text;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent;
  }
}
</style>
