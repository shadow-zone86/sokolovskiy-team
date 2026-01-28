<script setup lang="ts">
defineOptions({ name: 'VisitContactsBlock' })
/**
 * Виджет: блок контактов — телефон, VK, Telegram.
 */
import { siteContent } from '@/shared/config/siteContent'

const { contacts } = siteContent
</script>

<template>
  <section
    :id="siteContent.sections.contacts"
    class="visit-contacts"
    aria-label="Контакты"
  >
    <h2 class="visit-contacts__title">
      Контакты
    </h2>
    <div class="visit-contacts__list">
      <a
        :href="contacts.phoneHref"
        class="visit-contacts__item"
      >
        <span class="visit-contacts__label">Телефон</span>
        <span class="visit-contacts__value">{{ contacts.phone }}</span>
      </a>
      <a
        :href="contacts.vkUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="visit-contacts__item"
      >
        <span class="visit-contacts__label">ВКонтакте</span>
        <span class="visit-contacts__value">{{ contacts.vkDisplay }}</span>
      </a>
      <a
        :href="contacts.telegramUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="visit-contacts__item"
      >
        <span class="visit-contacts__label">Telegram</span>
        <span class="visit-contacts__value">{{ contacts.telegramLabel }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.visit-contacts {
  @include flex-col($spacing-0, flex-start, center);
  justify-content: center;
  @include padding-all($spacing-4);
  border-top: 1px solid $visit-border;

  @include media-min('lg') {
    @include padding-x($page-padding-x);
    @include padding-y($spacing-6);
  }
}

.visit-contacts__title {
  margin: 0 0 $spacing-4;
  font-size: 1.25rem;
  font-weight: 700;
  color: $visit-text;
}

.visit-contacts__list {
  @include flex-col($spacing-3, flex-start, flex-start);

  @include media-min('md') {
    @include flex-row($spacing-6, center, flex-start);
    flex-wrap: wrap;
  }
}

.visit-contacts__item {
  @include flex-col($spacing-0, flex-start, flex-start);
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;

  &:hover .visit-contacts__value {
    color: $visit-accent;
  }
}

.visit-contacts__label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: $visit-text-muted;
}

.visit-contacts__value {
  font-size: 1rem;
  font-weight: 500;
  color: $visit-text;
  transition: color 0.2s;
}
</style>
