import { initReactI18next } from "react-i18next";

import HttpApi from "i18next-http-backend";

import i18n from "i18next";

export enum ELanguage {
  RU = "ru",
  EN = "en",
}

export const defaultLanguage: string = ELanguage.RU;

export const languageList: ELanguage[] = Object.values<ELanguage>(ELanguage);

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}.json", // react-app/public/locales
    },
    lng: localStorage.getItem("language") || defaultLanguage,
    fallbackLng: [defaultLanguage],

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export const t = i18n.t.bind(i18n);

export const changeLanguage = (value: ELanguage) => {
  i18n.changeLanguage(value);
  localStorage.setItem("language", value);
};

export default i18n;
