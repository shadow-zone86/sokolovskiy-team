# UiButton

Переиспользуемая кнопка: рендерится как `<button>` или как `<a>`, если передан `href`.

## Использование

```vue
<script setup>
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton variant="primary">Связаться</UiButton>
  <UiButton variant="ghost" href="#hero">На главную</UiButton>
</template>
```

## Props

| Prop      | Тип                    | По умолчанию | Описание                                      |
|-----------|------------------------|--------------|-----------------------------------------------|
| `variant` | `'primary' \| 'ghost'` | `'primary'`  | Стиль: акцентная заливка или прозрачный фон. |
| `type`    | `'button' \| 'submit'` | `'button'`   | Тип кнопки (игнорируется при наличии `href`). |
| `href`    | `string`               | —            | Если задан, рендерится ссылкой `<a>`.         |
| `disabled`| `boolean`              | `false`      | Отключённое состояние.                        |

## Варианты

- **primary** — фон акцентного цвета, для основного действия (CTA).
- **ghost** — без фона, текст в цвет темы; при наведении — акцентный цвет текста.

Сторибук: `Button.stories.ts` в этой папке.
