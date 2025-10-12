export class Matrix {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  get rows() {
    return this.value.split(/[\n]+/).map((el) => el.split(" ").map(Number));
  }

  get columns() {
    let newArr: number[][] = [];
    const splitted = this.value.split(/[\n]+/);
    for (let i = 0; splitted.length > i; i++) {
      let findArr = splitted.map((el) => el.split(" ").map(Number)[i]);
      newArr.push(findArr);
    }
    return newArr;
  }
}
