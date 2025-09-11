 type Score = 10 | 5 | 1 | 0;

export const score = (x: number, y: number): Score | string => {
  const innerRadius = 1;
  const middleRadius = 5;
  const outerRadius = 10;
  const equation =
    x ** 2 + y ** 2 <= innerRadius ** 2
      ? 10
      : x ** 2 + y ** 2 > innerRadius ** 2 &&
        x ** 2 + y ** 2 <= middleRadius ** 2
      ? 5
      : x ** 2 + y ** 2 > middleRadius ** 2 &&
        x ** 2 + y ** 2 <= outerRadius ** 2
      ? 1
      : 0;
    return x > 10 || y > 10 || x < -10 || y < -10
    ? "Please provide x and y greater than -10 and less than 10"
    : equation;;
};
