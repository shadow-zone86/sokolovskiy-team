# Глава 4: Provide/Inject и Паттерны 🧩

> Инверсия зависимостей через provide/inject, Pinia store, паттерны в Vue-проекте

---

## 📋 Содержание

1. [Зачем provide/inject](#зачем-provideinject)
2. [Ключ и тип в shared](#ключ-и-тип-в-shared)
3. [Store в app и provide](#store-в-app-и-provide)
4. [Использование в виджетах и фичах](#использование-в-виджетах-и-фичах)
5. [Паттерны в проекте](#паттерны-в-проекте)

---

## 🧩 Зачем provide/inject

### Проблема прямой зависимости

Если виджеты импортируют конфиг напрямую:

```typescript
// ❌ Виджет зависит от конкретного модуля
import { siteContent } from '@/shared/config/siteContent'
const { profile } = siteContent
```

- Замена источника данных (API вместо статики) потребует правок во всех виджетах
- Нарушается принцип Dependency Inversion (D из SOLID)

### Решение: абстракция через inject

- В **shared** объявляются **ключ** (`SITE_CONTENT_STORE`) и **тип** (`SiteContentStore`)
- **app** предоставляет реализацию (Pinia store) через `provide`
- Виджеты и фичи получают данные через `inject(SITE_CONTENT_STORE)` и не знают, откуда они приходят

В результате верхние слои зависят от абстракции (ключ + тип), а не от конкретного файла конфига.

---

## 🔑 Ключ и тип в shared

### Расположение

`src/shared/config/index.ts`

### Код

```typescript
import type { InjectionKey } from 'vue'
import type { SiteContentStore } from './siteContent'

export const appTitle = 'Sokolovskiy Team'
export { siteContent } from './siteContent'
export type { SiteContent, SiteContentStore } from './siteContent'

export const SITE_CONTENT_STORE: InjectionKey<SiteContentStore> = Symbol('siteContentStore')
```

В `siteContent.ts`:

```typescript
export type SiteContent = typeof siteContent  // тип контента
export type SiteContentStore = { content: SiteContent }  // контракт для inject
```

**Правила:**

- Ключ — символ, чтобы не пересекаться с другими provide
- Тип `SiteContentStore` — узкий контракт: только `content`, без методов Pinia
- Виджеты импортируют только `SITE_CONTENT_STORE` из `@/shared/config`, не app

---

## 📦 Store в app и provide

### Pinia store

`src/app/store/siteContent.ts`:

```typescript
import { defineStore } from 'pinia'
import { siteContent, type SiteContent } from '@/shared/config'

export const useSiteContentStore = defineStore('siteContent', {
  state: (): { content: SiteContent } => ({
    content: siteContent,
  }),
})
```

Store импортирует данные из **shared/config** (публичный API). В будущем здесь можно заменить инициализацию на вызов API.

### Provide в App.vue

`src/app/App.vue`:

```vue
<script setup lang="ts">
import { provide } from 'vue'
import { useSiteContentStore } from '@/app/store'
import { SITE_CONTENT_STORE } from '@/shared/config'

provide(SITE_CONTENT_STORE, useSiteContentStore())
</script>
```

Только **app** вызывает `useSiteContentStore()` и передаёт его в дерево через provide. Виджеты и фичи не импортируют app.

---

## 💼 Использование в виджетах и фичах

### В виджете

```vue
<script setup lang="ts">
import { inject } from 'vue'
import { SITE_CONTENT_STORE } from '@/shared/config'

defineOptions({ name: 'VisitHeader' })

const { content } = inject(SITE_CONTENT_STORE)!
const { profile, contacts } = content
</script>

<template>
  <header>
    <h1>{{ profile.name }}</h1>
    <a :href="contacts.telegramUrl">Telegram</a>
  </header>
</template>
```

- `inject(SITE_CONTENT_STORE)!` — получаем store (non-null assertion, т.к. app всегда предоставляет)
- `content` — реактивное свойство Pinia store
- В шаблоне используем `content.sections.hero`, `content.profile` и т.д.

### В фиче (SectionNav)

Аналогично: импорт `SITE_CONTENT_STORE` из `@/shared/config`, `inject(SITE_CONTENT_STORE)!`, использование `content.nav`, `content.sectionOrder`.

---

## 🏗️ Паттерны в проекте

### 1. Единственный источник правды

Контент объявлен в `shared/config/siteContent.ts`. Store в app инициализируется этими данными. Все потребители получают одни и те же данные через inject — один канал.

### 2. Чистые функции в features/lib

В `features/section-nav/lib/` только чистые функции:

- `getCurrentSectionIndex(ratios, sectionOrder)` — по соотношениям видимости возвращает индекс текущей секции
- `formatPageNum(index)` — форматирует номер страницы в строку "01", "02"…

Они не зависят от Vue, DOM и конфига — покрыты тестами Vitest.

### 3. Публичный API слайсов

Импорты идут из индекс-файлов: `@/widgets/header`, `@/shared/config`, `@/features/section-nav`. Внутренние пути (`Header.vue`, `siteContent.ts`) не импортируются снаружи слайса.

### 4. Тонкая обёртка виджета

`widgets/page-nav` только подключает фичу: `<SectionNav />` и реэкспорт. Вся логика и UI навигации по секциям — в `features/section-nav`.

---

## 📚 Дополнительные материалы

- [Архитектурные решения](./02-architecture.md)
- [FSD Принципы](./03-fsd-principles.md)
- [Данные и конфиг](./05-data-and-config.md)
