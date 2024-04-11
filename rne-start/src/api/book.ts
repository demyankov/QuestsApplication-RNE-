import { IBooking } from "../types";

export const book = async (apiPath: string, bookedItem: URLSearchParams) => {
  console.log("bookedItem", bookedItem);

  const response = await fetch(apiPath, {
    method: "POST",
    body: bookedItem,
  });

  console.log("response", await response.json());
};
