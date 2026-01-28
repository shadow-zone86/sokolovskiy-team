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
        <HomeLink class="visit-footer__link" />
        <TelegramLink
          :show-label="true"
          class="visit-footer__link"
        />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { HomeLink } from '@/features/go-to-home'
import { TelegramLink } from '@/features/contact-telegram'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'VisitFooter' })

const { content } = inject(SITE_CONTENT_STORE)!
const { footer } = content
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
}
</style>
