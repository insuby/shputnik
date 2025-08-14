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
import { BusinessCredit } from './screens/BusinessCredit';
import { BankCredit } from './screens/BankCredit';
import {Development} from "./screens/Development";
import { Dataunload } from './screens/Dataunload';
import { Fdata } from './screens/Fdata';
// import { BlogTemplate } from './screens/BlogTemplate';
import { Privacy } from './screens/Privacy';
import { ScrollToTop } from './ScrollToTop';
import { BlogList } from './screens/Blog';
import { BlogPost } from './screens/Blog/Post';

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
      <Route element={<Layout />}>
        <Route path={RoutesPath.MAIN} element={<Main />} />
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
