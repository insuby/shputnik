// @ts-ignore
import "@devnomic/marquee/dist/index.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { RoutesPath } from './routes-path';
import { Layout } from './screens/Layout';
import { About } from './screens/About';
import { Main } from './screens/Main';
import { Work } from './screens/Work';
import { MicroCredit } from './screens/MicroCredit';
import { BNPL } from './screens/BNPL';
import { Reviews } from './screens/reviews';
import { Autocredit } from './screens/Autocredit';
import { IslamFinance } from './screens/IslamFinans';
import { P2P } from './screens/P2P';
import { BusinessLending } from './screens/BusinessLending';

export const App = () => {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
};

const Pages = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to={RoutesPath.MAIN} />} />
      <Route element={<Layout />}>
        <Route path={RoutesPath.MAIN} element={<Main />} />
        <Route path={RoutesPath.ABOUT} element={<About />} />
        <Route path={RoutesPath.WORK} element={<Work />} />
        <Route path={RoutesPath.REVIEWS} element={<Reviews />} />
        <Route path={RoutesPath.PRODUCTS} element={<MicroCredit />} />
        <Route path={RoutesPath.MICROCREDIT} element={<MicroCredit />} />
        <Route path={RoutesPath.AUTOCREDIT} element={<Autocredit />} />
        <Route path={RoutesPath.ISLAMFINANCE} element={<IslamFinance />} />
        <Route path={RoutesPath.BUSINESSLENDING} element={<BusinessLending />} />
        <Route path={RoutesPath.P2P} element={<P2P />} />
        <Route path={RoutesPath.BNPL} element={<BNPL />} />
      </Route>
    </Routes>
  );
};
