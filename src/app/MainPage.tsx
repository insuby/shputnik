import { Main, MainMobile } from 'pages';

import { useIsMobile } from 'shared/lib/use-is-mobile';

export const MainPage = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MainMobile /> : <Main />;
};
