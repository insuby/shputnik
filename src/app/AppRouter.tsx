import { About, BlogList, Reviews, Works } from 'pages';
import { ScrollToTop } from 'widgets';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

import { useIsMobile } from 'shared/lib/use-is-mobile';
import { RoutesPath } from 'shared/routes-path';

import { MainPage } from './MainPage';

export const AppRouter = () => {
  const isMobile = useIsMobile();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="*" element={<Navigate replace to={RoutesPath.MAIN} />} />
        <Route element={isMobile ? <MobileLayout /> : <DesktopLayout />}>
          <Route path={RoutesPath.MAIN} element={<MainPage />} />
          <Route path={RoutesPath.ABOUT} element={<About />} />
          <Route path={RoutesPath.WORK} element={<Works />} />
          <Route path={RoutesPath.REVIEWS} element={<Reviews />} />
          <Route path={RoutesPath.PRODUCTS} element={<MicroCredit />} />
          <Route path={RoutesPath.MICROCREDIT} element={<MicroCredit />} />
          <Route path={RoutesPath.AUTOCREDIT} element={<Autocredit />} />
          <Route path={RoutesPath.ISLAMFINANCE} element={<IslamFinance />} />
          <Route
            path={RoutesPath.BUSINESSCREDIT}
            element={<BusinessCredit />}
          />
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
    </BrowserRouter>
  );
};
