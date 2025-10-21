import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

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
    businesscredit: ruBusinesscredit,
    privacy: ruPrivacy,
    reviews: ruReviews,
    work: ruWork,
    widgets: ruWidgets,
    components: ruComponents,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  supportedLngs: ['ru'],
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
    'businesscredit',
    'privacy',
    'reviews',
    'work',
    'widgets',
    'components',
  ],
  interpolation: { escapeValue: false },
});
