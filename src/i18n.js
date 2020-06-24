import i18n from "i18next";
import translationEng from "./locales/en/translation.json";
import translationUa from "./locales/ua/translation.json";

i18n.init({
  debug: true,
  lng: "en",

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },

  resources: {
    en: {
      translations: translationEng,
    },
    ua: {
      translations: translationUa,
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

export default i18n;
