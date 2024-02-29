export const getDayOfWeek = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDay();
  return day;
};
