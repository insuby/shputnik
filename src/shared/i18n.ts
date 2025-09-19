import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

import { about as enAbout } from './locales/en/about';
import { autocredit as enAutocredit } from './locales/en/autocredit';
import { bankcredit as enBankcredit } from './locales/en/bankcredit';
import enBlog from './locales/en/blog';
import { bnpl as enBnpl } from './locales/en/bnpl';
import { businesscredit as enBusinesscredit } from './locales/en/businesscredit';
import { common as enCommon } from './locales/en/common';
import enComponents from './locales/en/components';
import { dataunload as enDataunload } from './locales/en/dataunload';
import { development as enDevelopment } from './locales/en/development';
import { fdata as enFdata } from './locales/en/fdata';
import enFooter from './locales/en/footer';
import enHome from './locales/en/home';
import { islamfinance as enIslamfinance } from './locales/en/islamfinance';
import { layout as enLayout } from './locales/en/layout';
import enMegamenu from './locales/en/megamenu';
import { microcredit as enMicrocredit } from './locales/en/microcredit';
import { mobile as enMobile } from './locales/en/mobile';
import enNav from './locales/en/nav';
import { p2p as enP2p } from './locales/en/p2p';
import { privacy as enPrivacy } from './locales/en/privacy';
import { reviews as enReviews } from './locales/en/reviews';
import enWidgets from './locales/en/widgets';
import { work as enWork } from './locales/en/work';
import { about as ruAbout } from './locales/ru/about';
import { autocredit as ruAutocredit } from './locales/ru/autocredit';
import { bankcredit as ruBankcredit } from './locales/ru/bankcredit';
import ruBlog from './locales/ru/blog';
import { bnpl as ruBnpl } from './locales/ru/bnpl';
import { businesscredit as ruBusinesscredit } from './locales/ru/businesscredit';
import { common as ruCommon } from './locales/ru/common';
import ruComponents from './locales/ru/components';
import { dataunload as ruDataunload } from './locales/ru/dataunload';
import { development as ruDevelopment } from './locales/ru/development';
import { fdata as ruFdata } from './locales/ru/fdata';
import ruFooter from './locales/ru/footer';
import ruHome from './locales/ru/home';
import { islamfinance as ruIslamfinance } from './locales/ru/islamfinance';
import { layout as ruLayout } from './locales/ru/layout';
import ruMegamenu from './locales/ru/megamenu';
import { microcredit as ruMicrocredit } from './locales/ru/microcredit';
import { mobile as ruMobile } from './locales/ru/mobile';
import ruNav from './locales/ru/nav';
import { p2p as ruP2p } from './locales/ru/p2p';
import { privacy as ruPrivacy } from './locales/ru/privacy';
import { reviews as ruReviews } from './locales/ru/reviews';
import ruWidgets from './locales/ru/widgets';
import { work as ruWork } from './locales/ru/work';

export const resources = {
  ru: {
    common: ruCommon,
    nav: ruNav,
    footer: ruFooter,
    about: ruAbout,
    megamenu: ruMegamenu,
    home: ruHome,
    blog: ruBlog,
    bnpl: ruBnpl,
    microcredit: ruMicrocredit,
    bankcredit: ruBankcredit,
    p2p: ruP2p,
    autocredit: ruAutocredit,
    islamfinance: ruIslamfinance,
    dataunload: ruDataunload,
    fdata: ruFdata,
    development: ruDevelopment,
    mobile: ruMobile,
    layout: ruLayout,
    businesscredit: ruBusinesscredit,
    privacy: ruPrivacy,
    reviews: ruReviews,
    work: ruWork,
    widgets: ruWidgets,
    components: ruComponents,
  },
  en: {
    common: enCommon,
    nav: enNav,
    footer: enFooter,
    about: enAbout,
    megamenu: enMegamenu,
    home: enHome,
    blog: enBlog,
    bnpl: enBnpl,
    microcredit: enMicrocredit,
    bankcredit: enBankcredit,
    p2p: enP2p,
    autocredit: enAutocredit,
    islamfinance: enIslamfinance,
    dataunload: enDataunload,
    fdata: enFdata,
    development: enDevelopment,
    mobile: enMobile,
    layout: enLayout,
    businesscredit: enBusinesscredit,
    privacy: enPrivacy,
    reviews: enReviews,
    work: enWork,
    widgets: enWidgets,
    components: enComponents,
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'en'],
    defaultNS: 'common',
    ns: [
      'common',
      'nav',
      'footer',
      'about',
      'megamenu',
      'home',
      'blog',
      'bnpl',
      'microcredit',
      'bankcredit',
      'autocredit',
      'p2p',
      'islamfinance',
      'dataunload',
      'fdata',
      'development',
      'mobile',
      'layout',
      'businesscredit',
      'privacy',
      'reviews',
      'work',
      'widgets',
      'components',
    ],
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });
