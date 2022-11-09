function printAverageGrade(input) {
    let name = input[0];
    let sumGrades = 0;
    let currentClass = 1;
    let index = 1;

    while (index < input.length) {
        let currentGrade = Number(input[index]);

        if (currentGrade === 2) {
            console.log(`${name} has been excluded at ${currentClass} grade`);
            return;
        }

        if (currentGrade >= 4.00) {
            sumGrades += currentGrade;
            currentClass++;
        }

        index++;
    }

    console.log(`${name} graduated. Average grade: ` + (sumGrades / (input.length - 1)).toFixed(2));
}

printAverageGrade(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);