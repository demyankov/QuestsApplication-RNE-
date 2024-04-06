export const configureUserName = (firstName?: string, secondName?: string) => {
  if (!firstName && !secondName) {
    return "";
  }

  if (firstName && secondName) {
    return firstName + " " + secondName;
  }

  if (firstName && !secondName) {
    return firstName;
  }

  return secondName;
};
