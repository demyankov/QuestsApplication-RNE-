export const getSchedule = async (apiPath: string) => {
  try {
    const response = await fetch(apiPath);

    const schedule = await response.json();
    return schedule;
  } catch (e) {
    return e;
  }
};
