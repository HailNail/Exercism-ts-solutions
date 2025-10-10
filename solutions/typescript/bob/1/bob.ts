export function hey(message: string) {
   const regex = {
    upperCaseQuestion: /^[^a-z]+\s*[A-Z]+\W*\?+\s*$/g,
    question: /^[A-Z\d]*[a-zA-Z0-9\s\W]*\?+\s*$/g,
    silence: /^\s*$/g,
    upperCase: /^[A-Z\s\W\d]*[A-Z\W]+\W*$/g,
  };
  const one = message.match(regex.upperCaseQuestion)?.toString();
  const two = message.match(regex.question)?.toString();
  const three = message.match(regex.silence)?.toString();
  const four = message.match(regex.upperCase)?.toString();

  switch (message) {
    case one:
      return "Calm down, I know what I'm doing!";
    case two:
      return "Sure.";
    case three:
      return "Fine. Be that way!";
    case four:
      return "Whoa, chill out!";
    default:
      return "Whatever.";
  }
}
