// Don't export
const getDaysInMonth = (month, year) => {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

// Don't export
const addEmptyDates = (month, firstDayIndex, lastDayIndex) => {
  const output = month;
  for (let i = 0; i < firstDayIndex; i++) {
    output.unshift("");
  }
  for (let i = 0; i < 6 - lastDayIndex; i++) {
    output.push("");
  }
  return output;
};

// Don't export
const sliceToWeeks = (month) => {
  const output = [];
  for (let i = 0; i < month.length; i += 7) {
    output.push([...month.slice(i, i + 7)]);
  }
  return output;
};

export const getRefreshedDays = (month, year) => {
  // Just to find what day of the week the first day of the month was, and also the last day
  const days = getDaysInMonth(month, year);
  const firstDayIndex = days[0].getDay();
  const lastDayIndex = days[days.length - 1].getDay();
  const addedEmptyDates = addEmptyDates(days, firstDayIndex, lastDayIndex);
  const slicedToWeeks = sliceToWeeks(addedEmptyDates);
  return slicedToWeeks;
};

export const getCurrentDate = () => {
  const this_second = new Date();
  const today = new Date(
    this_second.toISOString().substring(0, 10) + "T08:00:00.000Z"
  );
  const month = today.getMonth();
  const year = today.getFullYear();
  return [today, month, year];
};

export const fullDateToDD = (fullDate) =>
  fullDate.toISOString().substring(8, 10);

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
