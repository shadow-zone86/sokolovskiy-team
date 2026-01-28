<template>
  <header class="visit-header">
    <div class="visit-header__brand">
      <HeaderBrand />
    </div>
    <div class="visit-header__actions">
      <div class="visit-header__contacts">
        <PhoneLink />
        <TelegramLink />
      </div>
      <ConsultCtaButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ConsultCtaButton } from '@/features/consult-cta'
import { HeaderBrand } from '@/features/header-brand'
import { PhoneLink } from '@/features/contact-phone'
import { TelegramLink } from '@/features/contact-telegram'

defineOptions({ name: 'VisitHeader' })
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

.visit-header__actions {
  @include flex-col($spacing-2, flex-end, flex-end);
  gap: $spacing-2;
}

.visit-header__contacts {
  @include flex-row($spacing-3, center, flex-end);
  flex-wrap: wrap;
  gap: $spacing-2;
}
</style>
