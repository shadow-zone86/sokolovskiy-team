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
- В конфиг контактов: `consultUrl` (mailto) для кнопки «Заказать консультацию»
- В блок «О себе»: абзац про спорт (20+ лет в зале, форма, настрой, связь с работой)
- Фича **consult-cta**: кнопка «Заказать консультацию» (ConsultCtaButton). Сценарий инкапсулирован в фиче — сейчас mailto, позже можно переключить на модальное окно без правок виджета
- Фича **header-brand**: блок бренда в хедере (имя + слоган, переход на главную). HeaderBrand — сценарий «переход на главную» и стили перенесены в фичу
- Фича **contact-phone**: ссылка на телефон (PhoneLink). Сценарий «позвонить» инкапсулирован в фиче, стили перенесены
- Фича **contact-telegram**: ссылка на Telegram (TelegramLink). Сценарий «написать в Telegram» инкапсулирован в фиче, SVG-иконка и стили перенесены. Проп `showLabel` (boolean) — показывать текст «Telegram» рядом с иконкой
- Фича **go-to-home**: ссылка «На главную» (HomeLink). Сценарий перехода на hero-секцию инкапсулирован в фиче
- Фича **metrics-grid**: сетка метрик (MetricsGrid), логика вычисления значений в lib/getMetricValue. Виджет KeyMetrics композирует фичу
- Декоративный фон секций: миксин `decorative-background` (SVG-паттерн), применяется в одном месте — PageHome.vue (DRY)
- Vitest: тесты для getMetricValue (metrics-grid/lib)

### Changed

- Блок «О себе» переработан: фокус на карьере, без перечисления стека
  - Карьера с 2012 года: ФГУП ГХК (PL/SQL, Oracle, C++, производство), с 2019 — веб, 10+ АС, Joomla→Yii2, Nextcloud, портал, frontend; мотивация выбора frontend
  - 2023: Системы корпоративной аналитики — аналитическая платформа (Vue 3), поддержка версии на React, большие данные, дашборды
  - 2024: ЕРЦ ЖКХ — ЛК жителя/УК, legacy, UI-kit (39+ компонентов, Storybook, unit-тесты), Keycloak, React Native, внутренний Vue 3 framework (FSD, DI, тесты, документация, митапы)
- Кнопка «Заказать консультацию» в хедере ведёт на `mailto:rogueak@yandex.ru` (используется `contacts.consultUrl`)
- Виджет **Header**: пользовательские сценарии вынесены в фичи. Хедер композирует `<HeaderBrand />`, `<PhoneLink />`, `<TelegramLink />` и `<ConsultCtaButton />` вместо собственной разметки и логики; стили контактов и бренда — в фичах. Header больше не зависит от конфига напрямую (убраны inject и contacts)
- Виджет **Footer**: ссылки вынесены в фичи. Footer композирует `<HomeLink />` и `<TelegramLink :show-label="true" />` вместо прямой разметки и contacts
- Виджет **KeyMetrics**: блок сетки метрик вынесен в фичу metrics-grid; виджет композирует заголовок, lead, `<MetricsGrid />` и note

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
