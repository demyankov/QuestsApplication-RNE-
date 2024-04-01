import { GENRES } from "../constants";

export interface IQuest {
  id: string;
  apiPath: string;
  name: string;
  mainGenre: string;
  location: string;
  banner: string;
  levelOfFear: string;
  difficultyLevel: string;
  contactLevel: string;
  teamSize: string;
  ageFrom: string;
  duration: string;
  interactive: boolean;
  description: string[];
  shortDescription: string;
  additionalDescription: string[];
  modes: string[];
  isActive: boolean;
  genres: GENRES[];
}
