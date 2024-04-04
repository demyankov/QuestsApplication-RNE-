export const isOld = (date: Date, days: number = 180): boolean => {
  const nowDate = new Date();
  const delta = nowDate.getTime() - date.getTime();
  const limit = days * 86400000;

  const isOld = delta > limit;

  return isOld;
};
