import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Немедленная прокрутка
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    
    // Дополнительная прокрутка с небольшой задержкой для надежности
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      
      // Дополнительная проверка для старых браузеров
      if (window.scrollY > 0) {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};
