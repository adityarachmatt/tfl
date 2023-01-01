export const convertDate = (date) =>
  date
    .toString()
    .substring(4, 10)
    .split("")
    .filter((c, index) => !(c == "0" && index === 4))
    .join("");
