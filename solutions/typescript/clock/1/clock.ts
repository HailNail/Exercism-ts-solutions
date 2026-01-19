export class Clock {
  totalMinutes: number;
  constructor(hour: number, minute?: number) {
    this.totalMinutes = (((hour * 60 + (minute || 0)) % 1440) + 1440) % 1440;
  }

  public toString(): string {
    const hours = Math.floor(this.totalMinutes / 60) % 24;
    const minutes = this.totalMinutes % 60;
    const h = hours.toString().padStart(2, "0");
    const m = minutes.toString().padStart(2, "0");
    return `${h}:${m}`;
  }

  public plus(minutes: number): Clock {
    const getResult = this.totalMinutes + (minutes || 0);
    return new Clock(0, getResult);
  }

  public minus(minutes: number): Clock {
    const getResult = this.totalMinutes - (minutes || 0);
    return new Clock(0, getResult);
  }

  public equals(other: Clock): boolean {
    return this.totalMinutes === other.totalMinutes;
  }
}

const clocki = new Clock(2, 122);
console.log(clocki.toString());
