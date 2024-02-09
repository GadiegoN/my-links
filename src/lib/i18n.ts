import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "name": "Gadiego Nogueira",
        "title": "Front-end Developer",
        "copy": "Made with ❤️ by",
        "update": "Updated February 2th, 2024",
        "motivationalQuotes": {
          "quote1": "Success is the sum of small efforts repeated day after day.",
          "quote2": "Believe in yourself, and you're halfway to success.",
          "quote3": "The way to get started is to quit talking and begin doing.",
          "quote4": "The only place where success comes before work is in the dictionary.",
          "quote5": "Persistence is the path to success.",
          "quote6": "You are stronger than you think. Believe in yourself and achieve the impossible.",
          "quote7": "Failure is the opportunity to begin again, but with more intelligence.",
          "quote8": "It's never too late to be what you could have been.",
          "quote9": "What doesn't challenge you doesn't change you.",
          "quote10": "Remember: the only limitation you have is the one you impose on yourself.",
        }
      }
    },
    pt: {
      translation: {
        "name": "Gadiego Nogueira",
        "title": "Desenvolvedor Front-end",
        "copy": "Feito com ❤️ por",
        "update": "Atualizado em 02 de fevereiro de 2024",
        "motivationalQuotes": {
          "quote1": "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
          "quote2": "Acredite em si mesmo e você estará a meio caminho do sucesso.",
          "quote3": "A maneira de começar é parar de falar e começar a fazer.",
          "quote4": "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
          "quote5": "A persistência é o caminho do êxito.",
          "quote6": "Você é mais forte do que imagina. Acredite em si mesmo e alcance o impossível.",
          "quote7": "O fracasso é a oportunidade de começar de novo, com mais inteligência.",
          "quote8": "Nunca é tarde demais para ser o que você poderia ter sido.",
          "quote9": "O que não te desafia, não te transforma.",
          "quote10": "Lembre-se: a única limitação que você tem é aquela que você impõe a si mesmo",
        }
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