import { lazy } from 'react';

export const LazyAbout = lazy(() =>
  import('./about').then((module) => ({ default: module.About })),
);
export const LazyBlogList = lazy(() =>
  import('./blog').then((module) => ({ default: module.BlogList })),
);
export const LazyBlogPost = lazy(() =>
  import('./blog/post').then((module) => ({ default: module.BlogPost })),
);
export const LazyReviews = lazy(() =>
  import('./reviews').then((module) => ({ default: module.Reviews })),
);
export const LazyWorks = lazy(() =>
  import('./works').then((module) => ({ default: module.Works })),
);

export const LazyAutocredit = lazy(() =>
  import('./products/autocredit').then((module) => ({
    default: module.Autocredit,
  })),
);
export const LazyBNPL = lazy(() =>
  import('./products/bnpl').then((module) => ({ default: module.BNPL })),
);
export const LazyBankCredit = lazy(() =>
  import('./products/bank-credit').then((module) => ({
    default: module.BankCredit,
  })),
);
export const LazyBusinessCredit = lazy(() =>
  import('./products/business-credit').then((module) => ({
    default: module.BusinessCredit,
  })),
);
export const LazyDataunload = lazy(() =>
  import('./products/data-unload').then((module) => ({
    default: module.Dataunload,
  })),
);
export const LazyDevelopment = lazy(() =>
  import('./products/development').then((module) => ({
    default: module.Development,
  })),
);
export const LazyFdata = lazy(() =>
  import('./products/f-data').then((module) => ({ default: module.Fdata })),
);
export const LazyIslamFinance = lazy(() =>
  import('./products/islam-finans').then((module) => ({
    default: module.IslamFinance,
  })),
);
export const LazyMicroCredit = lazy(() =>
  import('./products/micro-credit').then((module) => ({
    default: module.MicroCredit,
  })),
);
export const LazyP2P = lazy(() =>
  import('./products/p2p').then((module) => ({ default: module.P2P })),
);
