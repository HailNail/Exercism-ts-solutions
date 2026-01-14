export class Robot {
  constructor() {}
  private static _robotNameInSet = new Set<string>();
  private _robo: string | null = null;

  public get name(): string {
    if (this._robo) return this._robo;
    const newName = this.generateName();
    this._robo = newName;
    Robot._robotNameInSet.add(newName);
    return newName;
  }

  private generateName() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    while (true) {
      let candidateName = "";
      for (let i = 0; candidateName.length < 5; i++) {
        candidateName +=
          i < 2
            ? letters[Math.floor(Math.random() * 26)]
            : numbers[Math.floor(Math.random() * 10)];
      }

      if (!Robot._robotNameInSet.has(candidateName)) {
        return candidateName;
      }
    }
  }

  public resetName(): void {
    this._robo = null;
  }

  public static releaseNames(): void {
    Robot._robotNameInSet.clear();
  }
}
