import { IQuestCard } from "../types";
import { GENRES } from "./genres";
import { LANGUAGES } from "./languages";

type QuestCardListType = Record<LANGUAGES, IQuestCard[]>;

export const questCardList: QuestCardListType = {
  [LANGUAGES.RU]: [
    {
      id: "001",
      title: "Запертые души",
      image: "https://blackroom.by/Image/banner_zapertye_dushi-promo.jpg",
      shortDescription:
        "Давным-давно жила одинокая старушка. Все дети очень любили ее. Любили за доброту, за веселые рассказы и поэтому часто бегали к ней в гости. Но однажды пришла беда... ",
      genres: [
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "3",
      difficultyLevel: "2",
      contactLevel: "3",
      teamSize: "2-5",
      ageFrom: "10+",
      duration: "60 минут",
      interactive: false,
      location: "Минск, пер. Северный, 13",
    },
    {
      id: "002",
      title: "Затащи меня в ад",
      image: "https://blackroom.by/Image/banner-ad-promo.jpg",
      shortDescription:
        "«Ад стонет и рыдает, грешных к себе забирает». Пытаясь найти средства на пропитание во время чумы, вы набрели на цыганское поселение и решили украсть дорогостоящую реликвию...",
      genres: [
        GENRES.HORROR,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "4",
      difficultyLevel: "3",
      contactLevel: "4",
      teamSize: "2-4",
      ageFrom: "12+",
      duration: "60 минут",
      interactive: false,
      location: "Минск, пер. Северный, 13",
    },
    {
      id: "003",
      title: "Носферату: Завещание",
      image: "https://blackroom.by/images/quest4/promo-nosfertu.webp",
      shortDescription:
        "Вы - потомки когда-то знатного рода. Однако ваш отец проиграл в карты свою часть имения брату.",
      genres: [
        GENRES.ACTION,
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "2",
      difficultyLevel: "3",
      contactLevel: "2",
      teamSize: "2-5",
      ageFrom: "12+",
      duration: "60 минут",
      interactive: true,
      location: "Минск, ул. 3-е Сентября, 21",
    },
    {
      id: "004",
      title: "Убийца из Уайтчепела",
      image: "https://blackroom.by/images/quest5/uiu1.jpg",
      shortDescription:
        "Старая Англия. Уже несколько лет всех жителей будоражат известия о зверских убийствах, совершаемых прямо на улицах...",
      genres: [
        GENRES.DETECTIVE,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "1",
      difficultyLevel: "4",
      contactLevel: "1",
      teamSize: "1-4",
      ageFrom: "10+",
      duration: "60 минут",
      interactive: true,
      location: "Минск, ул. 3-е Сентября, 21",
    },
    {
      id: "005",
      title: "Байки из склепа",
      image: "https://blackroom.by/Image/bayki-iz-sklepa-promo.jpg",
      shortDescription:
        "Как сочетать смешное и страшное? Где та грань, которая разделяет черный юмор и ужасы? На эти вопросы способен ответить наш совсем не добрый друг.",
      genres: [
        GENRES.COMEDY,
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "2",
      difficultyLevel: "2",
      contactLevel: "1",
      teamSize: "2-5",
      ageFrom: "12+",
      duration: "70 минут",
      interactive: true,
      location: "Минск, ул. 3-е Сентября, 21",
    },
    {
      id: "006",
      title: "Коралина в стране кошмаров",
      image: "https://blackroom.by/images/quest6/coralina1.webp",
      shortDescription:
        "Детки, приготовьтесь, за секретной дверцей вы попадете в другой мир… ",
      genres: [
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "2",
      difficultyLevel: "3",
      contactLevel: "1",
      teamSize: "1-5",
      ageFrom: "10+",
      duration: "60 минут",
      interactive: true,
      location: "Минск, ул. 3-е Сентября, 21",
    },
  ],
  [LANGUAGES.EN]: [
    {
      id: "001",
      title: "Locked souls",
      image: "https://blackroom.by/Image/banner_zapertye_dushi-promo.jpg",
      shortDescription:
        "A long time ago there lived a lonely old woman. All the children loved her very much. They loved her for her kindness, for her funny stories, and therefore often ran to visit her. But one day trouble came...",
      genres: [
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "3",
      difficultyLevel: "2",
      contactLevel: "3",
      teamSize: "2-5",
      ageFrom: "10+",
      duration: "60 minutes",
      interactive: false,
      location: "Minsk, per. Severny, 13",
    },
    {
      id: "002",
      title: "Take me to hell",
      image: "https://blackroom.by/Image/banner-ad-promo.jpg",
      shortDescription:
        "«Hell groans and weeps, takes the sinners to itself». While trying to find food during the plague, you came across a gypsy settlement and decided to steal an expensive relic...",
      genres: [
        GENRES.HORROR,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "4",
      difficultyLevel: "3",
      contactLevel: "4",
      teamSize: "2-4",
      ageFrom: "12+",
      duration: "60 minutes",
      interactive: false,
      location: "Minsk, per. Severny, 13",
    },
    {
      id: "003",
      title: "Nosferatu: Testament",
      image: "https://blackroom.by/images/quest4/promo-nosfertu.webp",
      shortDescription:
        "You are the descendants of a once noble family. However, your father lost his share of the estate to his brother at cards.",
      genres: [
        GENRES.ACTION,
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "2",
      difficultyLevel: "3",
      contactLevel: "2",
      teamSize: "2-5",
      ageFrom: "12+",
      duration: "60 minutes",
      interactive: true,
      location: "Minsk, st. September 3rd, 21",
    },
    {
      id: "004",
      title: "Whitechapel Killer",
      image: "https://blackroom.by/images/quest5/uiu1.jpg",
      shortDescription:
        "Old England. For several years now, all residents have been disturbed by news of brutal murders being committed right on the streets...",
      genres: [
        GENRES.DETECTIVE,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "1",
      difficultyLevel: "4",
      contactLevel: "1",
      teamSize: "1-4",
      ageFrom: "10+",
      duration: "60 minutes",
      interactive: true,
      location: "Minsk, st. September 3rd, 21",
    },
    {
      id: "005",
      title: "Tales from the Crypt",
      image: "https://blackroom.by/Image/bayki-iz-sklepa-promo.jpg",
      shortDescription:
        "How to combine funny and scary? Where is the line that separates black humor and horror? Our not at all kind friend can answer these questions.",
      genres: [
        GENRES.COMEDY,
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "2",
      difficultyLevel: "2",
      contactLevel: "1",
      teamSize: "2-5",
      ageFrom: "12+",
      duration: "70 minutes",
      interactive: true,
      location: "Minsk, st. September 3rd, 21",
    },
    {
      id: "006",
      title: "Coraline in the Land of Nightmares",
      image: "https://blackroom.by/images/quest6/coralina1.webp",
      shortDescription:
        "Kids, get ready, behind the secret door you will enter another world…",
      genres: [
        GENRES.MISTICISM,
        GENRES.CHILDRENS,
        GENRES.PERFORMANCE,
        GENRES.WITHACTOR,
      ],
      levelOfFear: "2",
      difficultyLevel: "3",
      contactLevel: "1",
      teamSize: "1-5",
      ageFrom: "10+",
      duration: "60 minutes",
      interactive: true,
      location: "Minsk, st. September 3rd, 21",
    },
  ],
};
