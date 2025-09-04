type DnaNucleotides = (dna: string) => string;
type ReplacementValues = { [key: string] : string}


export const toRna: DnaNucleotides = (dna) => {
  const dnaRegex = /^([GCTA]+)$/gi;
  if (dnaRegex.test(dna)) {
    const result = dna.toLowerCase().replace(/[gcta]/g, (char) => {
      const replacement: ReplacementValues = { g: "c", c: "g", t: "a", a: "u" };
      return replacement[char] || char;
    });
    return result.toUpperCase();
  } else {
    throw new Error("Invalid input DNA.");
  }
};
