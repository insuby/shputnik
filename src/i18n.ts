import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruCommon from './locales/ru/common';
import ruNav from './locales/ru/nav';
import ruFooter from './locales/ru/footer';
import ruAbout from './locales/ru/about';

import enCommon from './locales/en/common';
import enNav from './locales/en/nav';
import enFooter from './locales/en/footer';
import enAbout from './locales/en/about';

export const resources = {
  ru: {
    common: ruCommon,
    nav: ruNav,
    footer: ruFooter,
    about: ruAbout,
  },
  en: {
    common: enCommon,
    nav: enNav,
    footer: enFooter,
    about: enAbout,
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
    ns: ['common', 'nav', 'footer', 'about'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

