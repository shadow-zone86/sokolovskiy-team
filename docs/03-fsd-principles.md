# Глава 3: FSD Принципы 🎯

> Feature-Sliced Design — методология организации кода для масштабируемых приложений

---

## 🎯 Основные принципы

### 1. Слои архитектуры

Проект разделён на слои, каждый со своей ответственностью:

```
app/        ← Инициализация, роутер, Pinia, provide store
pages/      ← Страницы (композиция виджетов)
widgets/    ← Виджеты (блоки экрана, композиция features и shared)
features/   ← Фичи (пользовательские сценарии, бизнес-логика)
entities/   ← Бизнес-сущности (типы, модели)
shared/     ← Переиспользуемый код (конфиг, lib, стили, ui)
```

### 2. Правила зависимостей

Слои могут зависеть только от слоёв ниже:

```
app → pages → widgets → features → entities → shared
```

**Запрещено:**

- ❌ `features` → `widgets`
- ❌ `entities` → `features`
- ❌ `shared` → `entities` / `features` / `widgets` / `pages` / `app`
- ❌ `widgets` → `widgets` (импорт между виджетами)

**Разрешено:**

- ✅ `pages` → `widgets`
- ✅ `widgets` → `features`, `shared`
- ✅ `features` → `shared`
- ✅ `entities` → `shared`
- ✅ `app` → `shared` (для store: app импортирует shared/config)

### 3. Сегментация

Внутри слайса допустимы сегменты:

```
features/section-nav/
├── lib/          # Чистая логика (getCurrentSectionIndex, formatPageNum)
├── ui/           # SectionNav.vue
└── index.ts      # Публичный API

widgets/portfolio-section/
├── model/        # Типы (PortfolioItem)
├── ui/           # PortfolioSection.vue
└── index.ts
```

---

## 📁 Слои в проекте

### app/ — Инициализация приложения

**Назначение:** Роутер, Pinia, provide store, глобальные стили.

**Содержит:**

- `App.vue` — корневой компонент, `provide(SITE_CONTENT_STORE, useSiteContentStore())`
- `main.ts` — createApp, router, Pinia
- `router/` — маршруты (Vue Router)
- `store/` — Pinia store (siteContent)
- `styles/` — глобальные стили (box-sizing, body)

**Правила:**

- Не содержит бизнес-логики
- Предоставляет данные через provide
- Виджеты не импортируют app (получают store через inject)

---

### pages/ — Страницы

**Назначение:** Композиция виджетов в страницу.

**Содержит:**

- `home/PageHome.vue` — главная: список виджетов (Header, Hero, AboutSection, SkillsSection, ServicesSection, KeyMetrics, PortfolioSection, Footer, PageNav)

**Правила:**

- Импортирует только из `@/widgets/*`
- Не импортирует features, entities, shared напрямую (данные приходят в виджеты через inject)

**Пример:**

```vue
<!-- pages/home/PageHome.vue -->
<template>
  <div class="visit-page">
    <VisitHeader />
    <VisitHero />
    <main class="visit-main">
      <VisitAboutSection />
      <VisitSkillsSection />
      ...
    </main>
    <VisitFooter />
    <VisitPageNav />
  </div>
</template>

<script setup lang="ts">
import { VisitHeader } from '@/widgets/header'
import { VisitHero } from '@/widgets/hero'
// ...
</script>
```

---

### widgets/ — Виджеты

**Назначение:** Готовые блоки экрана (секции лендинга).

**Правила:**

- Не содержат бизнес-логики (логика в features)
- Получают контент через `inject(SITE_CONTENT_STORE)`
- Импортируют из `@/shared/*`, `@/features/*` (например SectionNav)
- Не импортируют другие виджеты и не импортируют app

**Пример:**

```vue
<!-- widgets/header/ui/Header.vue -->
<script setup lang="ts">
import { inject } from 'vue'
import { UiButton } from '@/shared/ui'
import { SITE_CONTENT_STORE } from '@/shared/config'

const { content } = inject(SITE_CONTENT_STORE)!
const { profile, contacts } = content
</script>
```

---

### features/ — Фичи

**Назначение:** Пользовательские сценарии (навигация по секциям, клики, скролл).

**Содержит:**

- `section-nav/` — навигация по полноэкранным секциям
  - `lib/` — чистые функции (тесты в Vitest)
  - `ui/` — SectionNav.vue (Observer, отображение)

**Правила:**

- Один слайс — одна фича
- Может использовать shared и entities
- Не импортирует widgets и pages
- UI фичи может получать контент через inject(SITE_CONTENT_STORE)

---

### entities/ — Сущности

**Назначение:** Типы и модели бизнес-сущностей.

**Содержит:**

- `profile/` — типы Profile, ProfileMetrics (при необходимости используются для типизации конфига)

**Правила:**

- Только типы и модели
- Не содержит UI и API в текущем проекте
- Импортирует только shared при необходимости

---

### shared/ — Переиспользуемый код

**Назначение:** Конфиг, утилиты, стили, UI-компоненты.

**Содержит:**

- `config/` — siteContent, типы SiteContent / SiteContentStore, SITE_CONTENT_STORE (inject key)
- `lib/` — useExperienceYears, тесты
- `styles/` — переменные, миксины, global.scss
- `ui/` — Button (+ Storybook, README)

**Правила:**

- Не импортирует app, pages, widgets, features, entities
- Публичный API через index.ts

---

## 🔧 Именование и импорты

### Импорты

**Правильно:**

```typescript
// Страница импортирует виджеты
import { VisitHeader } from '@/widgets/header'

// Виджет импортирует shared и feature
import { SITE_CONTENT_STORE } from '@/shared/config'
import { SectionNav } from '@/features/section-nav'

// Фича импортирует shared
import { formatPageNum } from '../lib/formatPageNum'
```

**Неправильно:**

```typescript
// ❌ Виджет импортирует виджет
import { VisitFooter } from '@/widgets/footer'

// ❌ Фича импортирует виджет
import { VisitPageNav } from '@/widgets/page-nav'

// ❌ Виджет импортирует app
import { useSiteContentStore } from '@/app/store'
```

### Порядок в .vue

1. `<template>` — сначала
2. `<script setup>` — импорты, затем defineOptions, затем логика
3. `<style scoped>` — в конце

---

## 📚 Дополнительные материалы

- [Архитектурные решения](./02-architecture.md)
- [Provide/Inject и Паттерны](./04-provide-inject-and-patterns.md)
- [Данные и конфиг](./05-data-and-config.md)
