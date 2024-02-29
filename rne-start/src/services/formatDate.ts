export const formatDate = (date: string) => {
  const formatedDate = date.split("-").reverse().join(".");
  return formatedDate;
};
