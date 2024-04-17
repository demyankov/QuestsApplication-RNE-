import { IQuest } from "../types";

export const filteredByArray = (objArray: IQuest[], filterArray: string[]) => {
  return objArray.filter(({ id }) => filterArray.includes(id));
};
