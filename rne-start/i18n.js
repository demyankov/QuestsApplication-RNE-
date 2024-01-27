import i18n from "i18next";
import * as Localization from "expo-localization";
import { initReactI18next } from "react-i18next";

// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector

const languageDetector = {
  type: "languageDetector",
  async: true, // async detection
  detect: (callback) => {
    // We will get back a string like "en-UK".
    callback(Localization.locale);
  },

  init: () => {},

  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(languageDetector)
  .init({
    fallbackLng: "en",
    compatibilityJSON: "v3",
    resources: {
      en: {
        translation: {
          settings: "Profile settings",
          followers: "Followers",
          follows: "Follows",
          posts: "Posts",
          profile: "Profile",
          lastPosts: "Last posts",
        },
      },
      ru: {
        translation: {
          settings: "Настройки профиля",
          followers: "Подписчики",
          follows: "Подписки",
          posts: "Посты",
          profile: "Профиль",
          lastPosts: "Последние посты",
        },
      },
      // have a initial namespace
      ns: ["translation"],
      supportedLngs: [
        // Supported languages
        {
          code: "en",
          locale: "English",
        },
        {
          code: "ru",
          locale: "Russian",
        },
      ],
      defaultNS: "translation",
      interpolation: {
        escapeValue: false, // not needed for react
      },
    },
  });
export default i18n;
