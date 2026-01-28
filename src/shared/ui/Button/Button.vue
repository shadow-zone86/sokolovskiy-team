<script setup lang="ts">
/**
 * Переиспользуемая кнопка. SOLID: только отображение и эмит, без бизнес-логики.
 */
defineOptions({ name: 'UiButton' })

interface Props {
  variant?: 'primary' | 'ghost'
  type?: 'button' | 'submit'
  href?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  type: 'button',
  href: undefined,
  disabled: false,
})
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :type="href ? undefined : type"
    :href="href"
    :disabled="disabled"
    class="ui-button"
    :class="[`ui-button--${variant}`]"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: $spacing-1;
  padding: $spacing-2 $spacing-4;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.ui-button--primary {
  background-color: $visit-accent;
  color: $visit-bg;

  &:hover:not(:disabled) {
    background-color: $visit-accent-hover;
  }
}

.ui-button--ghost {
  background-color: transparent;
  color: $visit-text;

  &:hover:not(:disabled) {
    color: $visit-accent;
  }
}
</style>
