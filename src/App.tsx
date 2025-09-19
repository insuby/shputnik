// @ts-ignore
import '@devnomic/marquee/dist/index.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { About } from 'pages/about';
import { BlogList, BlogPost } from 'pages/blog';
import { Main } from 'pages/home';
import { Layout, MobileLayout } from 'pages/layouts';
import { MainMobile } from 'pages/main-mobile';
import { Privacy, Reviews, Work } from 'pages/other';
import {
  Autocredit,
  BNPL,
  BankCredit,
  BusinessCredit,
  Dataunload,
  Development,
  Fdata,
  IslamFinance,
  MicroCredit,
  P2P,
} from 'pages/products';

import { ScrollToTop } from './ScrollToTop';
import { RoutesPath } from './routes-path';

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
