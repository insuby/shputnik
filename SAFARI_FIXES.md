# Safari Fixes для Framer Motion анимаций

## Проблема
Safari имеет специфические проблемы с анимациями SVG и Framer Motion:
- Элементы "пропадают" при скролле
- SVG не отображаются после анимации
- Мигание и непоявление элементов
- Проблемы с GPU-слоями

## Решение

### 1. CSS исправления
Добавлены файлы:
- `src/app/styles/safari-fixes.css` - базовые исправления
- `src/app/styles/safari-motion-fixes.css` - специфичные исправления для motion

### 2. Изменения в анимациях
- Заменен `opacity: 0` на `opacity: 0.01` для предотвращения пропадания
- Добавлен класс `motion-container` ко всем motion элементам
- Увеличен margin в `useInView` с `-30px` до `-50px`

### 3. Утилитарный хук
Создан `use-safari-motion.ts` с оптимизированными настройками для Safari.

## Применение

### В компонентах
```tsx
import { motion } from 'framer-motion';
import { getOptimalMotionSettings } from 'shared/lib/use-safari-motion';

const settings = getOptimalMotionSettings();

<motion.div
  initial={settings.initial}
  animate={settings.animate}
  transition={settings.transition}
  className={settings.className}
>
  {/* контент */}
</motion.div>
```

### Для SVG элементов
```tsx
<motion.svg
  className="motion-container large-svg"
  initial={{ opacity: 0.01, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
>
  {/* SVG контент */}
</motion.svg>
```

## Ключевые CSS классы

- `.motion-container` - базовый класс для motion элементов
- `.safari-safe-opacity` - безопасная прозрачность
- `.large-svg` - для больших SVG элементов
- `.overflow-container` - для контейнеров с overflow: hidden

## Проверка
1. Откройте страницу в Safari
2. Проверьте анимации при скролле
3. Убедитесь, что SVG отображаются корректно
4. Проверьте на мобильном Safari (iOS)

## Дополнительные рекомендации

1. **Избегайте** `opacity: 0` в начальных состояниях
2. **Используйте** `transform: translateZ(0)` для принудительного GPU-слоя
3. **Добавляйте** `will-change: transform, opacity` для анимируемых свойств
4. **Проверяйте** `overflow: hidden` на родительских элементах
5. **Тестируйте** на реальных устройствах iOS Safari
