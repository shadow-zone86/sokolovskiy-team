<template>
  <div class="header-brand">
    <h1 class="header-brand__name">
      <a
        :href="heroHref"
        class="header-brand__name-link"
        aria-label="На главную"
      >
        {{ profile.name }}
      </a>
    </h1>
    <p class="header-brand__tagline">
      {{ profile.tagline }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'HeaderBrand' })

const { content } = inject(SITE_CONTENT_STORE)!
const { profile } = content

const heroHref = computed(() => `#${content.sections.hero}`)
</script>

<style scoped lang="scss">
.header-brand {
  @include flex-col($spacing-1, flex-start, flex-start);
}

.header-brand__name {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;

  @include media-min('md') {
    font-size: 1.5rem;
  }
}

.header-brand__name-link {
  color: $visit-text;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent;
  }
}

.header-brand__tagline {
  margin: 0;
  font-size: 0.875rem;
  color: $visit-text-muted;
  line-height: 1.4;
}
</style>
