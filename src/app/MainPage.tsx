import { Main, MainMobile } from 'pages';

import { useEffect } from 'react';

import { PAGE_META } from 'shared/lib/page-meta-config';
import { preloadComponents } from 'shared/lib/preload-components';
import { useIsMobile } from 'shared/lib/use-is-mobile';
import { usePageMeta } from 'shared/lib/use-page-meta';

export const MainPage = () => {
  const isMobile = useIsMobile();
  const pageMeta = usePageMeta(PAGE_META.main);

  useEffect(() => {
    const timer = setTimeout(() => {
      preloadComponents();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {pageMeta}
      {isMobile ? <MainMobile /> : <Main />}
    </>
  );
};
