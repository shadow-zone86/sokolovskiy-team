<template>
  <footer
    class="visit-footer"
    role="contentinfo"
  >
    <div class="visit-footer__inner">
      <p class="visit-footer__copyright">
        © {{ currentYear }} {{ footer.copyright }}
      </p>
      <div class="visit-footer__links">
        <a
          :href="`#${content.sections.hero}`"
          class="visit-footer__link"
        >
          На главную
        </a>
        <a
          :href="contacts.telegramUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="visit-footer__link visit-footer__link--icon"
          :aria-label="`Telegram: ${contacts.telegramLabel}`"
        >
          <span
            class="visit-footer__telegram-icon"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="18"
              height="18"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </span>
          Telegram
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'VisitFooter' })

const { content } = inject(SITE_CONTENT_STORE)!
const { footer, contacts } = content
const currentYear = new Date().getFullYear()
</script>

<style scoped lang="scss">
.visit-footer {
  border-top: 1px solid $visit-border;
  @include padding-y($spacing-4);
  @include padding-x($spacing-4);

  @include media-min('lg') {
    @include padding-x($page-padding-x);
  }
}

.visit-footer__inner {
  max-width: $breakpoint-2xl;
  margin: 0 auto;
  @include flex-between(row, center);
  flex-wrap: wrap;
  gap: $spacing-3;
}

.visit-footer__copyright {
  margin: 0;
  font-size: 0.8125rem;
  color: $visit-text-muted;
}

.visit-footer__links {
  @include flex-row($spacing-4, center, flex-end);
}

.visit-footer__link {
  font-size: 0.8125rem;
  color: $visit-text-muted;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent;
  }

  &--icon {
    @include flex-row($spacing-1, center, center);
  }
}

.visit-footer__telegram-icon {
  display: inline-flex;
  line-height: 0;

  svg {
    display: block;
  }
}
</style>
