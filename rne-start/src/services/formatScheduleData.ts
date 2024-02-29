import { ISchedule } from "../store";

export const formatScheduleData = (data: ISchedule[]) => {
  const dateArray = data.map(({ date }) => date);
  const set = new Set(dateArray);
  const uniqueDates = Array.from(set);

  const formattedData = uniqueDates.map((uniqueDate) =>
    data.filter((data) => data.date === uniqueDate)
  );

  return formattedData;
};
