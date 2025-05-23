import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { RoutesPath } from './routes-path';
import { Layout } from './screens/Layout';
import { About } from './screens/About';
import { Main } from './screens/Main';
import { Work } from './screens/Work';
import { MicroCredit } from './screens/MicroCredit';
import { Reviews } from './screens/reviews';

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
      </Route>
    </Routes>
  );
};
