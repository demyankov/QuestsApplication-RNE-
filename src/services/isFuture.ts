export const isFuture = (date: Date): boolean => {
  const nowDate = new Date();
  const isFuture = date.getTime() - nowDate.getTime() > 0;

  return isFuture;
};
