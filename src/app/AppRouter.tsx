import { ScrollToTop } from 'widgets';

import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import {
  LazyAbout,
  LazyAutocredit,
  LazyBNPL,
  LazyBankCredit,
  LazyBlogList,
  LazyBlogPost,
  LazyBusinessCredit,
  LazyDataunload,
  LazyDevelopment,
  LazyFdata,
  LazyIslamFinance,
  LazyMicroCredit,
  LazyP2P,
  LazyReviews,
  LazyWorks,
} from 'pages/lazy-pages';

import { DesktopLayout, MobileLayout } from 'widgets/layouts';

import { useIsMobile } from 'shared/lib/use-is-mobile';
import { RoutesPath } from 'shared/routes-path';
import { LoadingSpinner } from 'shared/ui';

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
          <Route
            path={RoutesPath.ABOUT}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyAbout />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.WORK}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyWorks />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.REVIEWS}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyReviews />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.PRODUCTS}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyMicroCredit />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.MICROCREDIT}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyMicroCredit />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.AUTOCREDIT}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyAutocredit />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.ISLAMFINANCE}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyIslamFinance />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.BUSINESSCREDIT}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyBusinessCredit />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.DEVELOPMENT}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyDevelopment />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.BANKCREDIT}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyBankCredit />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.DATAUNLOAD}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyDataunload />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.FDATA}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyFdata />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.P2P}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyP2P />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.BNPL}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyBNPL />
              </Suspense>
            }
          />
          <Route
            path={RoutesPath.BLOG}
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyBlogList />
              </Suspense>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Suspense
                fallback={<LoadingSpinner size="lg" className="min-h-screen" />}
              >
                <LazyBlogPost />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
