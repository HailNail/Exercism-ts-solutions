type Leap = (n: number) => boolean;

export const isLeap: Leap = (year) => {
  const check =
    year % 400 === 0
      ? true
      : year % 400 !== 0 && year % 100 === 0
      ? false
      : year % 4 === 0
      ? true
      : false;
  return check;
};
