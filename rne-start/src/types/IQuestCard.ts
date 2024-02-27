import { GENRES } from '../constants';

export interface IQuestCard {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  genres: GENRES[];
  levelOfFear?: string;
  difficultyLevel?: string;
  contactLevel?: string;
  teamSize?: string;
  ageFrom?: string;
  duration: string;
  interactive: boolean;
  location: string;
}
