<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide } from 'vue'
import { useSiteContentStore } from '@/app/store'
import { SITE_CONTENT_STORE } from '@/shared/config'

provide(SITE_CONTENT_STORE, useSiteContentStore())
</script>

<style scoped lang="scss">
</style>
