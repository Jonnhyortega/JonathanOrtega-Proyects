import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en/en.json';
import es from '../locales/es/es.json';
import pt from '../locales/pt/pt.json'; 
import zh from '../locales/zh/zh.json'; 
import de from '../locales/de/de.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      pt: { translation: pt },
      zh: { translation: zh }, 
      de: { translation: de }, 
    },
    lng: 'es', 
    fallbackLng: 'es', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
