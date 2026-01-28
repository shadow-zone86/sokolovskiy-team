# Changelog

Все значимые изменения в проекте документируются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [Unreleased]

### Added

- Документация по образцу: README с оглавлением, главы в `docs/`
  - 01-quick-start.md — установка, запуск
  - 02-architecture.md — SOLID, обзор архитектуры
  - 03-fsd-principles.md — FSD, слои, правила зависимостей
  - 04-provide-inject-and-patterns.md — provide/inject, Pinia, паттерны
  - 05-data-and-config.md — контент, типы, расширение, будущий API
  - CHANGELOG.md

## [0.0.0] — текущая версия

### Added

- Сайт-визитка на Vue 3 + Vite + TypeScript
- Архитектура Feature-Sliced Design (app, pages, widgets, features, entities, shared)
- Контент через Pinia store и provide/inject (Dependency Inversion)
- Публичный API shared/config (siteContent, типы, SITE_CONTENT_STORE)
- Секции: герой, о себе, навыки, направления, в цифрах, портфолио, контакты, футер
- Фича section-nav: навигация по секциям (чистые функции в lib, UI в features)
- Виджет page-nav как обёртка над SectionNav
- Vitest: тесты для useExperienceYears, getCurrentSectionIndex, formatPageNum
- Storybook для UiButton, README у Button
- SCSS: глобальные переменные и миксины (тёмная тема, акцент)
- Pre-commit: lint-staged (ESLint для изменённых файлов)
- Команды: dev, build, preview, test, test:run, lint, typecheck, storybook, analyze

### Changed

- (При дальнейших изменениях добавлять сюда)

### Fixed

- (Исправления добавлять сюда)
