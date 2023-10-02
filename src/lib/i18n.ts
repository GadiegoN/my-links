import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
          translation: {
            "name": "Gadiego Nogueira",
            "title": "Front-end Developer",
            "copy": "Made with ❤️ by",
            "update": "Updated 10/01/2023"
          }
        },
        pt: {
          translation: {
            "name": "Gadiego Nogueira",
            "title": "Desenvolvedor Front-end",
            "copy": "Feito com ❤️ por",
            "update": "Atualizado em 01/10/2023"
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