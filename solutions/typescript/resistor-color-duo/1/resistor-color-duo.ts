export function decodedValue(color: string[]) {
   const valueOne = colors.indexOf(color[0]).toString();
  const valueTwo = colors.indexOf(color[1]).toString();
  const totalValue: string = valueOne.concat(valueTwo);
  const totalValueToNumber = parseInt(totalValue);

  return totalValueToNumber;
}

export const colors = [
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