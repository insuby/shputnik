import { Main, MainMobile } from 'pages';

import { useEffect } from 'react';

import { preloadComponents } from 'shared/lib/preload-components';
import { useIsMobile } from 'shared/lib/use-is-mobile';

export const MainPage = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      preloadComponents();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return isMobile ? <MainMobile /> : <Main />;
};
