import { useInView } from 'framer-motion';

/**
 * Safari-совместимый хук для анимаций с оптимизированными настройками
 */
export const useSafariMotion = (ref: React.RefObject<HTMLElement>) => {
  return useInView(ref, {
    once: true,
    margin: '-50px', // Увеличенный margin для Safari
    amount: 0.1, // Минимальное количество видимости для срабатывания
  });
};

/**
 * Безопасные начальные значения для Safari
 */
export const safariSafeInitial = {
  opacity: 0.01, // Вместо 0 для предотвращения пропадания
  y: 50,
  x: 0,
};

/**
 * Безопасные анимированные значения для Safari
 */
export const safariSafeAnimate = {
  opacity: 1,
  y: 0,
  x: 0,
};

/**
 * Оптимизированные настройки transition для Safari
 */
export const safariSafeTransition = {
  duration: 0.7,
  ease: 'easeOut',
  delay: 0,
};

/**
 * Дополнительные CSS классы для Safari-совместимости
 */
export const safariMotionClasses = 'motion-container safari-safe-opacity';

/**
 * Проверка на Safari браузер
 */
export const isSafari = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;
  return /^((?!chrome|android).)*safari/i.test(userAgent);
};

/**
 * Проверка на iOS Safari
 */
export const isIOSSafari = () => {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent;
  return /iPad|iPhone|iPod/.test(userAgent) && /Safari/.test(userAgent);
};

/**
 * Получение оптимальных настроек для текущего браузера
 */
export const getOptimalMotionSettings = () => {
  const isSafariBrowser = isSafari();
  const isIOS = isIOSSafari();
  
  return {
    initial: isSafariBrowser ? safariSafeInitial : { opacity: 0, y: 50 },
    animate: safariSafeAnimate,
    transition: {
      ...safariSafeTransition,
      // Дополнительные настройки для iOS Safari
      ...(isIOS && {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Более плавная кривая для iOS
      }),
    },
    className: isSafariBrowser ? safariMotionClasses : 'motion-container',
  };
};
