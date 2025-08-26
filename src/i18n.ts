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
import ruBnpl from './locales/ru/bnpl';
import enBnpl from './locales/en/bnpl';
import { microcredit as ruMicrocredit } from './locales/ru/microcredit';
import { microcredit as enMicrocredit } from './locales/en/microcredit';
import ruBankcredit from './locales/ru/bankcredit';
import enBankcredit from './locales/en/bankcredit';
import ruAutocredit from './locales/ru/autocredit';
import enAutocredit from './locales/en/autocredit';
import ruP2p from './locales/ru/p2p';
import enP2p from './locales/en/p2p';
import ruIslamfinance from './locales/ru/islamfinance';
import enIslamfinance from './locales/en/islamfinance';
import ruDataunload from './locales/ru/dataunload';
import enDataunload from './locales/en/dataunload';
import { fdata as ruFdata } from './locales/ru/fdata';
import { fdata as enFdata } from './locales/en/fdata';
import ruDevelopment from './locales/ru/development';
import enDevelopment from './locales/en/development';
import { mobile as ruMobile } from './locales/ru/mobile';
import { mobile as enMobile } from './locales/en/mobile';
import { businesscredit as ruBusinesscredit } from './locales/ru/businesscredit';
import { businesscredit as enBusinesscredit } from './locales/en/businesscredit';
import { privacy as ruPrivacy } from './locales/ru/privacy';
import { privacy as enPrivacy } from './locales/en/privacy';

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
    autocredit: ruAutocredit,
    p2p: ruP2p,
    islamfinance: ruIslamfinance,
    dataunload: ruDataunload,
    fdata: ruFdata,
    development: ruDevelopment,
    mobile: ruMobile,
    businesscredit: ruBusinesscredit,
    privacy: ruPrivacy,
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
    autocredit: enAutocredit,
    p2p: enP2p,
    islamfinance: enIslamfinance,
    dataunload: enDataunload,
    fdata: enFdata,
    development: enDevelopment,
    mobile: enMobile,
    businesscredit: enBusinesscredit,
    privacy: enPrivacy,
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
    ns: ['common', 'nav', 'footer', 'about', 'megamenu', 'home', 'blog', 'bnpl', 'microcredit', 'bankcredit', 'autocredit', 'p2p', 'islamfinance', 'dataunload', 'fdata', 'development', 'mobile', 'businesscredit', 'privacy'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

