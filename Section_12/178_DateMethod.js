const future = new Date(2024, 3, 10, 10, 23);
console.log(+future);
console.log(new Date(+future));

const CalcDayPassed = (Date1, Date2) =>
  Math.abs(Date2 - Date1) / (1000 * 60 * 60 * 24);

//  calculating the days throught the dates
const days = CalcDayPassed(new Date(2024, 2, 20), new Date(2024, 2, 26));
console.log(days);
