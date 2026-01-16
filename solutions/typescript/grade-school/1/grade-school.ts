export class GradeSchool {
  private listOfStudents = new Map<number, string[]>(null);
  roster() {
    const sortedRoster: { [key: number]: string[] } = {};
    const sortedGrades = Array.from(this.listOfStudents.keys()).sort(
      (a, b) => a - b
    );
    for (const grade of sortedGrades) {
      const names = this.listOfStudents.get(grade) || [];
      sortedRoster[grade] = [...names].sort();
    }

    return sortedRoster;
  }

   add(nameOfStudent: string, grade: number) {
    for (const [existingGrade, students] of this.listOfStudents.entries()) {
      if (students.includes(nameOfStudent)) {
        const index = students.indexOf(nameOfStudent);
        students.splice(index, 1);
      }
    }

    const currentGradeList = this.listOfStudents.get(grade);
    if (currentGradeList) {
      currentGradeList.push(nameOfStudent);
    } else {
      this.listOfStudents.set(grade, [nameOfStudent]);
    }
  }

  grade(numberGrade: number) {
    const getStudentsByGrade = this.listOfStudents.get(numberGrade);
    if (!getStudentsByGrade) return [];
    return [...getStudentsByGrade].sort();
  }
}
