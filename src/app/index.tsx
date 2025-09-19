import './styles/globals.css';
import './styles/pagination.css';
import './styles/tailwind.css';
import '@devnomic/marquee/dist/index.css';

import { About, BlogList, Main, MainMobile, Reviews, Works } from 'pages';
import { ScrollToTop } from 'widgets';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { BlogPost } from 'pages/blog';
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

import { DesktopLayout, MobileLayout } from 'widgets/layouts';

import { checkIfMobile } from 'shared/lib/utils.ts';
import { RoutesPath } from 'shared/routes-path';

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
      <Route element={isMobile ? <MobileLayout /> : <DesktopLayout />}>
        <Route
          path={RoutesPath.MAIN}
          element={isMobile ? <MainMobile /> : <Main />}
        />
        <Route path={RoutesPath.ABOUT} element={<About />} />
        <Route path={RoutesPath.WORK} element={<Works />} />
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
      </Route>
    </Routes>
  );
};
