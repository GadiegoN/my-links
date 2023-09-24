import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
          translation: {
            "name": "Gadiego Nogueira",
            "title": "Front-end Developer",
            "copy": "Made with ❤️ by"
          }
        },
        pt: {
          translation: {
            "name": "Gadiego Nogueira",
            "title": "Desenvolvedor Front-end",
            "copy": "Feito com ❤️ por"
          }
        }
      },
      lng: "pt", 
      fallbackLng: "pt",
  
      interpolation: {
        escapeValue: false
      }
});

export default i18n;