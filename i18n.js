import i18n from "i18next";
import * as Localization from "expo-localization";
import { initReactI18next } from "react-i18next";
import { SCREENS } from "./src/constants";

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
          main: "Main page",
          settings: "Profile settings",
          history: "Booking history",
          reviews: "Reviews",
          reviewExist: "You have already left a review for this quest",
          sendReviewSuccessfully: "Your review has been successfully published",
          noReviews: "No reviews",
          noFavorites: "No favorites quests",
          noVisited: "No visited quests",
          selectDate: "Select game date",
          futureDate: "Are you from the future?",
          oldDate: "More than 180 days have passed",
          rateGame: "Rate this game",
          visited: "Visited",
          visitedQuests: "Visited quests",
          favorites: "Favorites",
          favoritesQuests: "Favorites quests",
          playerRating: "Player rating",
          maxRating: "Maximum rating according to reviews",
          minRating: "Minimum rating according to reviews",
          averageRating: "Average rating according to reviews",
          profile: "Profile",
          questsList: "Quests list",
          questDetailsTitle: "Quest description",
          firstName: "First name",
          secondName: "Second name",
          age: "Age",
          phone: "Phone",
          location: "Location",
          personalData: "Personal data",
          interactive: "Interactive",
          fear: "Level of fear",
          difficulty: "Difficulty",
          contact: "Сontact level",
          closed: "Closed",
          notChosen: "Not chosen",
          сomment: "Your comment",
          closed: "Closed",
          from: "from",
          rub: "rub",
          description: "Description",
          booking: "Booking a quest",
          summary: "Total payable",
          chooseTariff: "chooseTariff",
          leaveReviewFor: "Leave a review for the quest",
          signUp: "Registration",
          signIn: "Login",
          password: "Password",
          goToMain: "Go to main",
          quit: "Quit from account",
          errors: {
            incorrectEmail: "Incorrect email",
            incorrectName: "Incorrect name",
            incorrectNumber: "Incorrect number",
            incorrectPhone: "Incorrect phone number format",
            incorrectCharacter: "Incorrect character",
            requiredField: "Required field",
            noWhitespace: "The password must not contain a space character",
            noCyrillic: "The password must not contain a Cyrillic letters",
            requiredCapitalLetter: "The password must contain a capital letter",
            requiredLowercaseLetter:
              "The password must contain an lowercase letter",
            requiredNumber: "The password must contain a number",
            requiredSpecialCharacter:
              "The password must contain a special character",
            minChar2: "The number of characters must be at least 2",
            minChar4: "The number of characters must be at least 4",
            minChar5: "The number of characters must be at least 5",
            maxChar25: "The number of characters should be no more than 25",
            maxChar50: "The number of characters should be no more than 50",
            minCharPhone: "The number of characters must be at least 9",
            maxCharPhone: "The number of digits should be no more than 17",
            maxAge: "You can hardly be more than 999 years old",
          },
          [SCREENS.MAIN]: {
            title: "The best escape rooms in Minsk",
            mainText:
              "In our catalog you can book online the most popular quests in Minsk",
          },
          [SCREENS.QUESTDETAILS]: {
            aboutQuest: "Briefly about the quest",
            description: "Description",
            additionalTerms: "Additional terms",
            gameModes: "Game modes",
            bookedQuest: "Book a quest",
            address: "How to get there",
            reviews: "Reviews",
            scheduleText:
              "Click on the desired time to find out the final price and book a game.",
          },
          buttons: {
            save: "Save",
            cancel: "Cancel",
            details: "More details...",
            passed: "The quest passed",
            favorite: "Favorite",
            previously: "Previously",
            next: "Next",
            book: "Book",
            leaveReview: "Leave review",
            signUp: "Registration",
            signIn: "Login",
          },
          days: {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
          },
        },
      },
      ru: {
        translation: {
          main: "Главная страница",
          settings: "Настройки профиля",
          history: "История бронирований",
          reviews: "Отзывы",
          reviewExist: "Вы уже оставляли отзыв на данный квест",
          selectDate: "Выберите дату игры",
          sendReviewSuccessfully: "Ваш отзыв успешно опубликован",
          noReviews: "Отзывы отсутствуют",
          noFavorites: "Избранные квесты отсутствуют",
          noVisited: "Посещенные квесты отсутствуют",
          futureDate: "Вы из будущего?",
          oldDate: "Прошло более 180 дней",
          rateGame: "Оцените игру",
          visited: "Посещенные",
          visitedQuests: "Посещенные квесты",
          favorites: "Избранные",
          favoritesQuests: "Избранные квесты",
          playerRating: "Рейтинг игрока",
          maxRating: "Максимальная оценка по отзывам",
          minRating: "Минимальная оценка по отзывам",
          averageRating: "Средняя оценка по отзывам",
          profile: "Профиль",
          questsList: "Список квестов",
          questDetailsTitle: "Описание квеста",
          favoritesQuests: "Избранные квесты",
          firstName: "Имя",
          secondName: "Фамилия",
          age: "Возраст",
          phone: "Номер телефона",
          location: "Местоположение",
          personalData: "Личные данные",
          interactive: "Интерактивный",
          fear: "Уровень страха",
          difficulty: "Сложность",
          contact: "Уровень контакта",
          closed: "Закрыт",
          notChosen: "Не выбрано",
          сomment: "Ваш комментарий",
          closed: "Закрыто",
          from: "от",
          rub: "руб",
          description: "Описание",
          booking: "Бронирование квеста",
          summary: "Итого к оплате",
          chooseTariff: "Выберите тариф",
          leaveReviewFor: "Оставить отзыв на квест",
          signUp: "Регистрация",
          signIn: "Войти",
          password: "Пароль",
          goToMain: "Назад на главную",
          quit: "Выйти из аккаунта",
          errors: {
            incorrectEmail: "Некорректный email",
            incorrectName: "Некорректное имя",
            incorrectNumber: "Некорректное число",
            incorrectPhone: "Некорректный формат номера телефона",
            incorrectCharacter: "Некорректный символ",
            requiredField: "Обязательное для заполнения поле",
            noWhitespace: "Пароль не должен содержать символов пробела",
            noCyrillic: "Пароль не должен содержать букв кириллицы",
            requiredCapitalLetter: "Пароль должен содержать прописную букву",
            requiredLowercaseLetter: "Пароль должен содержать строчную букву",
            requiredNumber: "Пароль должен содержать цифру",
            requiredSpecialCharacter:
              "Пароль должен содержать специальный символ",
            minChar2: "Число символов должно быть не менее 2",
            minChar4: "Число символов должно быть не менее 4",
            minChar5: "Число символов должно быть не менее 5",
            maxChar25: "Число символов должно быть не более 25",
            maxChar50: "Число символов должно быть не более 50",
            minCharPhone: "Номер телефона должен содержать не менее 9 цифр",
            maxCharPhone: "Номер телефона должен содержать не более 17 цифр",
            maxAge: "Врядли вам больше 999 лет",
          },
          [SCREENS.MAIN]: {
            title: "Лучшие квесты Минска",
            mainText:
              "В нашем каталоге Вы можете онлайн забронировать самые популярные квесты в Минске",
          },
          [SCREENS.QUESTDETAILS]: {
            aboutQuest: "Кратко о квесте",
            description: "Описание",
            additionalTerms: "Дополнительные условия",
            gameModes: "Режимы игры",
            bookedQuest: "Забронировать квест",
            address: "Как добраться",
            reviews: "Отзывы",
            scheduleText:
              "Нажмите на желаемое время, чтобы узнать окончательную цену и забронировать игру.",
          },
          buttons: {
            save: "Сохранить",
            cancel: "Отмена",
            details: "Подробнее...",
            passed: "Квест пройден",
            favorite: "Избранный",
            previously: "Ранее",
            next: "Далее",
            book: "Забронировать",
            leaveReview: "Оставить отзыв",
            signUp: "Регистрация",
            signIn: "Войти",
          },
          days: {
            0: "Воскресенье",
            1: "Понедельник",
            2: "Вторник",
            3: "Среда",
            4: "Четверг",
            5: "Пятница",
            6: "Суббота",
          },
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
