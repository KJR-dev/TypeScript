export const convertToYearMonthDay = () => {
  let day: number;
  let month: number;
  let year: number;

  day = 560;
  year = Math.floor(day / 365);
  day = Math.floor(day % 365);
  month = Math.floor(day / 30);
  day = Math.floor(day % 30);

  console.log(`${year}year ${month}month ${day}day`);
};