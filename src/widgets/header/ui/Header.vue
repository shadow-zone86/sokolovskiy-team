<template>
  <header class="visit-header">
    <div class="visit-header__brand">
      <h1 class="visit-header__name">
        <a
          :href="`#${content.sections.hero}`"
          class="visit-header__name-link"
          aria-label="На главную"
        >
          {{ profile.name }}
        </a>
      </h1>
      <p class="visit-header__tagline">
        {{ profile.tagline }}
      </p>
    </div>
    <div class="visit-header__actions">
      <div class="visit-header__contacts">
        <a
          :href="contacts.phoneHref"
          class="visit-header__link"
        >{{ contacts.phone }}</a>
        <a
          :href="contacts.telegramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="visit-header__link visit-header__link--icon"
          :aria-label="`Telegram: ${contacts.telegramLabel}`"
        >
          <span
            class="visit-header__telegram-icon"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="22"
              height="22"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </span>
        </a>
      </div>
      <UiButton
        :href="contacts.consultUrl"
        variant="primary"
      >
        {{ contacts.ctaConsult }}
      </UiButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { UiButton } from '@/shared/ui'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'VisitHeader' })

const { content } = inject(SITE_CONTENT_STORE)!
const { profile, contacts } = content
</script>

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
  line-height: 1.2;

  @include media-min('md') {
    font-size: 1.5rem;
  }
}

.visit-header__name-link {
  color: $visit-text;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent;
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

  &--icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}

.visit-header__telegram-icon {
  display: inline-flex;
  line-height: 0;

  svg {
    display: block;
  }
}
</style>
