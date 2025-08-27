import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { common as ruCommon } from './locales/ru/common';
import ruNav from './locales/ru/nav';
import ruFooter from './locales/ru/footer';
import { about as ruAbout } from './locales/ru/about';

import { common as enCommon } from './locales/en/common';
import enNav from './locales/en/nav';
import enFooter from './locales/en/footer';
import { about as enAbout } from './locales/en/about';
import ruMegamenu from './locales/ru/megamenu';
import enMegamenu from './locales/en/megamenu';
import ruHome from './locales/ru/home';
import enHome from './locales/en/home';
import ruBlog from './locales/ru/blog';
import enBlog from './locales/en/blog';
import { bnpl as ruBnpl } from './locales/ru/bnpl';
import { bnpl as enBnpl } from './locales/en/bnpl';
import { microcredit as ruMicrocredit } from './locales/ru/microcredit';
import { microcredit as enMicrocredit } from './locales/en/microcredit';
import { bankcredit as ruBankcredit } from './locales/ru/bankcredit';
import { bankcredit as enBankcredit } from './locales/en/bankcredit';
import { p2p as ruP2p } from './locales/ru/p2p';
import { p2p as enP2p } from './locales/en/p2p';
import { autocredit as ruAutocredit } from './locales/ru/autocredit';
import { autocredit as enAutocredit } from './locales/en/autocredit';

import { islamfinance as ruIslamfinance } from './locales/ru/islamfinance';
import { islamfinance as enIslamfinance } from './locales/en/islamfinance';
import { dataunload as ruDataunload } from './locales/ru/dataunload';
import { dataunload as enDataunload } from './locales/en/dataunload';
import { fdata as ruFdata } from './locales/ru/fdata';
import { fdata as enFdata } from './locales/en/fdata';
import { development as ruDevelopment } from './locales/ru/development';
import { development as enDevelopment } from './locales/en/development';
import { mobile as ruMobile } from './locales/ru/mobile';
import { mobile as enMobile } from './locales/en/mobile';
import { businesscredit as ruBusinesscredit } from './locales/ru/businesscredit';
import { businesscredit as enBusinesscredit } from './locales/en/businesscredit';
import { privacy as ruPrivacy } from './locales/ru/privacy';
import { privacy as enPrivacy } from './locales/en/privacy';
import { reviews as ruReviews } from './locales/ru/reviews';
import { reviews as enReviews } from './locales/en/reviews';
import { work as ruWork } from './locales/ru/work';
import { work as enWork } from './locales/en/work';

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
    businesscredit: ruBusinesscredit,
    privacy: ruPrivacy,
    reviews: ruReviews,
    work: ruWork,
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
    businesscredit: enBusinesscredit,
    privacy: enPrivacy,
    reviews: enReviews,
    work: enWork,
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
    ns: ['common', 'nav', 'footer', 'about', 'megamenu', 'home', 'blog', 'bnpl', 'microcredit', 'bankcredit', 'autocredit', 'p2p', 'islamfinance', 'dataunload', 'fdata', 'development', 'mobile', 'businesscredit', 'privacy', 'reviews', 'work'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

