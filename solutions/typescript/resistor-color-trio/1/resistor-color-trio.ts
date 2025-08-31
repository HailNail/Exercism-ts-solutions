
export const ResistorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;

type Color = keyof typeof ResistorValues;

export function decodedResistorValue([colorOne, colorTwo, ohms]: Color[]): string {
  const toPowerOf = Math.pow(10, ResistorValues[ohms]);
  const kiloohms = Math.pow(10, 3);
  const megaohms = Math.pow(10, 6);
  const gigaohms = Math.pow(10, 9);
  const output =
    Number(`${ResistorValues[colorOne]}${ResistorValues[colorTwo]}`) *
    toPowerOf;

  if (output >= gigaohms) {
    return (output / gigaohms).toString().concat(" gigaohms");
  } else if (output >= megaohms) {
    return (output / megaohms).toString().concat(" megaohms");
  } else if (output >= kiloohms) {
    return (output / kiloohms).toString().concat(" kiloohms");
  } else {
    return output.toString().concat(" ohms");
  }
}