export const getAge = (age: string): string => {
  if (!age) return;

  const numbers = ["2", "3", "4"];
  const lastNumber = age[age.length - 1];
  const penultimateNumber = age[age.length - 2];

  if (numbers.includes(lastNumber) && penultimateNumber !== "1") {
    return `${age} года`;
  }

  if (lastNumber === "1") {
    return `${age} год`;
  }

  return `${age} лет`;
};
