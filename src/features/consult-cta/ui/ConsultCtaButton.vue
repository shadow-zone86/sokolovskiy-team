<template>
  <UiButton
    :href="href"
    variant="primary"
  >
    {{ label }}
  </UiButton>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { UiButton } from '@/shared/ui'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'ConsultCtaButton' })

const { content } = inject(SITE_CONTENT_STORE)!
const { contacts } = content

const label = computed(() => contacts.ctaConsult)
const href = computed(() => contacts.consultUrl)
</script>

<style lang="scss" scoped></style>
