import { LANGUAGES } from '@constants';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';

const { EN } = LANGUAGES;

const resources = {
  [EN]: {
    translation: en,
  },
};

i18next.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: EN,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
