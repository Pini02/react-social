import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Commenti-p": "Comments"
    }
  },
  it: {
    translation: {
      "Commenti-p": "Commenti"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'it',
    fallbackLng: 'en'
  });

export default i18n;