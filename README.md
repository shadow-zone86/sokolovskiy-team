# Sokolovskiy Team

Vue 3 + Vite + TypeScript, FSD, SCSS (глобальные переменные/миксины), pre-commit (lint + type-check + build), Storybook, bundle analyzer.

## Скрипты

- `npm run dev` — dev-сервер
- `npm run build` — сборка (с type-check)
- `npm run preview` — превью сборки
- `npm run lint` — ESLint
- `npm run typecheck` — проверка типов (vue-tsc)
- `npm run storybook` — Storybook (порт 6006)
- `npm run build-storybook` — сборка Storybook
- `npm run analyze` — сборка; отчёт bundle analyzer откроется в `dist/stats.html` (после сборки открой файл в браузере)

## Pre-commit

При коммите выполняются: `lint` → `typecheck` → `build`. Коммит пройдёт только если все три шага успешны.

## SCSS

Переменные и миксины из `src/shared/styles/` подключаются глобально через Vite (`additionalData`). В компонентах можно сразу использовать `$color-primary`, `@include respond-to('md')` и т.п. без `@use` в каждом файле.

## FSD

- `src/app` — инициализация, роутер, глобальные стили
- `src/pages` — страницы
- `src/widgets` — виджеты
- `src/features` — фичи (действия пользователя)
- `src/entities` — сущности
- `src/shared` — общие UI, утилиты, стили, конфиг

Импорты: слой может импортировать только из слоёв ниже (shared — общий фундамент).
