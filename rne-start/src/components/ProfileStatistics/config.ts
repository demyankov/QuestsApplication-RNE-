import { SCREENS } from "../../constants";
import {
  RootState,
  getFavoritesCountSelector,
  getFavoritesSelector,
  getVisitedCountSelector,
  getVisitedSelector,
} from "../../store";

interface IStatistics {
  text: string;
  iconColor: string;
  selector: (state: RootState) => number;
  to: SCREENS;
}

export const statistics: IStatistics[] = [
  {
    text: "visited",
    iconColor: "#f2440f",
    selector: getVisitedCountSelector,
    to: SCREENS.VISITED,
  },
  {
    text: "reviews",
    iconColor: "#81f20f",
    selector: () => 0,
    to: SCREENS.REVIEWS,
  },
  {
    text: "favorites",
    iconColor: "#ee0ff2",
    selector: getFavoritesCountSelector,
    to: SCREENS.FAVORITES,
  },
];
