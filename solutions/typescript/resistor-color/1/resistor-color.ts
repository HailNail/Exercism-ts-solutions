export const colorCode = (color: string) => {
  const currentColor = COLORS.findIndex((findColor) => findColor === color);

  return currentColor !== undefined ? currentColor : "Please provide correct color";
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
