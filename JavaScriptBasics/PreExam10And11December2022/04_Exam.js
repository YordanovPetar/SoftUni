function printExamInformation(input) {
    let studentsCount = Number(input[0]);
    let topStudents = 0;
    let studentsBetween400And499 = 0;
    let studentsBetween300And399 = 0;
    let studentsFail = 0;
    let averageScore = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let currentStudentScore = Number(input[i]);
        averageScore += currentStudentScore;

        if (currentStudentScore >= 5.00) {
            topStudents++;
        } else if (currentStudentScore >= 4.00 && currentStudentScore <= 4.99) {
            studentsBetween400And499++;
        } else if (currentStudentScore >= 3.00 && currentStudentScore <= 3.99) {
            studentsBetween300And399++;
        } else {
            studentsFail++;
        }
    }

    topStudents = topStudents / studentsCount * 100;
    studentsBetween400And499 = studentsBetween400And499 / studentsCount * 100;;
    studentsBetween300And399 = studentsBetween300And399 / studentsCount * 100;;
    studentsFail =  studentsFail / studentsCount * 100;;
    averageScore /= studentsCount;

    console.log(`Top students: ${topStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${studentsBetween400And499.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${studentsBetween300And399.toFixed(2)}%`);
    console.log(`Fail: ${studentsFail.toFixed(2)}%`);
    console.log(`Average: ${averageScore.toFixed(2)}`);
}

printExamInformation(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"]);
