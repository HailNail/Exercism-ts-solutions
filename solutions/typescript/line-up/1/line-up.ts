function formattedNumber(number: number) {
  let end = "";

  const formattedNumber = number.toString();
  const endOne = formattedNumber.endsWith("1") && !formattedNumber.endsWith("11");
  const endTwo = formattedNumber.endsWith("2") && !formattedNumber.endsWith("12");
  const endThree = formattedNumber.endsWith("3") && !formattedNumber.endsWith("13");

  if (endOne) {
    end = "st";
  } else if (endTwo) {
    end = "nd";
  } else if (endThree) {
    end = "rd";
  } else {
    end = "th";
  }
  return end;
}

export function format(name: string, number: number): string {
  const end = formattedNumber(number);

  return `${name}, you are the ${number}${end} customer we serve today. Thank you!`;
}
