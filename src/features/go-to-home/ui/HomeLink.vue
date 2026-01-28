<template>
  <a
    :href="heroHref"
    class="home-link"
    aria-label="На главную"
  >
    <slot>На главную</slot>
  </a>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'HomeLink' })

const { content } = inject(SITE_CONTENT_STORE)!

const heroHref = computed(() => `#${content.sections.hero}`)
</script>

<style scoped lang="scss">
.home-link {
  color: $visit-text-muted;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent;
  }
}
</style>
