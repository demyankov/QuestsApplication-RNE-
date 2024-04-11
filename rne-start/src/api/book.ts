export const book = async (apiPath: string, bookedItem: FormData) =>
  fetch(apiPath, {
    method: "POST",
    body: bookedItem,
  });
