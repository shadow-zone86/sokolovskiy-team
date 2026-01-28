<template>
  <a
    :href="phoneHref"
    class="phone-link"
  >
    {{ phone }}
  </a>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'PhoneLink' })

const { content } = inject(SITE_CONTENT_STORE)!
const { contacts } = content

const phone = computed(() => contacts.phone)
const phoneHref = computed(() => contacts.phoneHref)
</script>

<style scoped lang="scss">
.phone-link {
  font-size: 0.9375rem;
  color: $visit-text;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: $visit-accent;
  }
}
</style>
