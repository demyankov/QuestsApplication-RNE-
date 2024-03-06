import { SCREENS } from "../../constants";
import { User } from "../../store";

interface IStatistics {
  text: string;
  iconColor: string;
  countName: "countOfFollowers" | "countOfFollows" | "countOfPosts";
  to: SCREENS;
}

export const statistics: IStatistics[] = [
  {
    text: "followers",
    iconColor: "#f2440f",
    countName: "countOfFollowers",
    to: SCREENS.FOLLOWERS,
  },
  {
    text: "follows",
    iconColor: "#81f20f",
    countName: "countOfFollows",
    to: SCREENS.FOLLOWERS,
  },
  {
    text: "posts",
    iconColor: "#ee0ff2",
    countName: "countOfPosts",
    to: SCREENS.FOLLOWERS,
  },
];
