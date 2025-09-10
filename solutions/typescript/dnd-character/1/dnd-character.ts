export class DnDCharacter {
  static result = 0;
  static results: number[] = [];
  static modifier = 0;

  public static generateAbilityScore(): number {
    let diceValuesArr: number[] = [];
    while (DnDCharacter.results.length < 6) {
      for (let i = 0; i < 4; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        diceValuesArr.push(value);
      }

      const shift = diceValuesArr.sort((a, b) => a - b).shift();
      const sum = diceValuesArr.reduce((acc, curr) => acc + curr, 0);
      DnDCharacter.result = DnDCharacter.results.push(sum);
      diceValuesArr = [];
    }
    return DnDCharacter.result;
  }

  get strength() {
    return DnDCharacter.results[0];
  }

  get dexterity() {
    return DnDCharacter.results[1];
  }

  get constitution() {
    return DnDCharacter.results[2];
  }

  get intelligence() {
    return DnDCharacter.results[3];
  }

  get wisdom() {
    return DnDCharacter.results[4];
  }

  get charisma() {
    return DnDCharacter.results[5];
  }

  public static getModifierFor(abilityValue: number): number {
    DnDCharacter.modifier = Math.floor((abilityValue - 10) / 2);
    return DnDCharacter.modifier;
  }

  get hitpoints() {
    return 10 + DnDCharacter.getModifierFor(this.constitution);
  }
}
