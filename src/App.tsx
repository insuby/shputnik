// @ts-ignore
import '@devnomic/marquee/dist/index.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ScrollToTop } from './ScrollToTop';
import { RoutesPath } from './routes-path';
import { About } from './screens/About';
import { Autocredit } from './screens/Autocredit';
import { BNPL } from './screens/BNPL';
import { BankCredit } from './screens/BankCredit';
import { BlogList } from './screens/Blog';
import { BlogPost } from './screens/Blog/Post';
import { BusinessCredit } from './screens/BusinessCredit';
import { Dataunload } from './screens/Dataunload';
import { Development } from './screens/Development';
import { Fdata } from './screens/Fdata';
import { IslamFinance } from './screens/IslamFinans';
import { Layout } from './screens/Layout';
import { Main } from './screens/Main';
import { MicroCredit } from './screens/MicroCredit';
import { MobileLayout } from './screens/MobileLayout';
import { P2P } from './screens/P2P';
import { Privacy } from './screens/Privacy';
import { Work } from './screens/Work';
import { MainMobile } from './screens/main-mobile';
import { Reviews } from './screens/reviews';

function checkIfMobile() {
  // Дополнительная проверка по размеру экрана
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    ) ||
    (navigator.maxTouchPoints > 0 && /MacIntel/.test(navigator.platform)) || // Для iPad на iOS 13+
    (window.innerWidth <= 768 && window.innerHeight <= 1024)
  );
}

export const isMobile = checkIfMobile();

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Pages />
    </BrowserRouter>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to={RoutesPath.MAIN} />} />
      <Route element={isMobile ? <MobileLayout /> : <Layout />}>
        <Route
          path={RoutesPath.MAIN}
          element={isMobile ? <MainMobile /> : <Main />}
        />
        <Route path={RoutesPath.ABOUT} element={<About />} />
        <Route path={RoutesPath.WORK} element={<Work />} />
        <Route path={RoutesPath.REVIEWS} element={<Reviews />} />
        <Route path={RoutesPath.PRODUCTS} element={<MicroCredit />} />
        <Route path={RoutesPath.MICROCREDIT} element={<MicroCredit />} />
        <Route path={RoutesPath.AUTOCREDIT} element={<Autocredit />} />
        <Route path={RoutesPath.ISLAMFINANCE} element={<IslamFinance />} />
        <Route path={RoutesPath.BUSINESSCREDIT} element={<BusinessCredit />} />
        <Route path={RoutesPath.DEVELOPMENT} element={<Development />} />
        <Route path={RoutesPath.BANKCREDIT} element={<BankCredit />} />
        <Route path={RoutesPath.DATAUNLOAD} element={<Dataunload />} />
        <Route path={RoutesPath.FDATA} element={<Fdata />} />
        <Route path={RoutesPath.P2P} element={<P2P />} />
        <Route path={RoutesPath.BNPL} element={<BNPL />} />
        <Route path={RoutesPath.BLOG} element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path={RoutesPath.PRIVACY} element={<Privacy />} />
      </Route>
    </Routes>
  );
};
