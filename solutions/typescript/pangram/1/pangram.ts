export const isPangram = (value: string) : boolean => {
  let arrayOfLetters: string[] = [];
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const splittedValue = value.toLowerCase().split("");
  for (let i = 0; i <= 25; i++) {
    if (splittedValue.includes(letters.charAt(i))) {
      arrayOfLetters.push(letters.charAt(i));
    }
  }
  return arrayOfLetters.join("") === letters ? true : false;
};
