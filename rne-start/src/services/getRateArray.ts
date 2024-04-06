export const getRateArray = (rate: number) => {
  const rateArray = [];
  for (let i = 0; i < 10; i++) {
    i < rate ? rateArray.push(true) : rateArray.push(false);
  }

  return rateArray;
};
