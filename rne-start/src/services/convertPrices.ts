export interface IConvertPrice {
  price: string;
  players_num: string;
  option: string;
}

export const convertPrices = (obj: Record<string, string>): IConvertPrice[] => {
  const arr: IConvertPrice[] = [];

  for (let key in obj) {
    const price = obj[key];
    const item = {
      price,
      players_num: key,
      option: `${key} - ${price} руб.`,
    };

    arr.push(item);
  }

  return arr;
};
