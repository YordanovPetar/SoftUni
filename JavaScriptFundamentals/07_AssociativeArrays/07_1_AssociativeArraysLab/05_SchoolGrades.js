function printSortedGrades(input) {
    let grades = new Map();

    input.forEach(el => {
        let tokens = el.split(' ');
        let name = tokens.shift();
        let setOfGrade = tokens;

        if (grades.has(name)) {
            let oldSet = grades.get(name);

            for (let grade of setOfGrade) {
                oldSet.push(grade);
            }

            grades.set(name, oldSet);
        } else {
            grades.set(name, setOfGrade);
        }
    });

    let sortedEntries = Array.from(grades.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [key, value] of sortedEntries) {
        let sumGrade = 0;

        for (let grade of value) {
            sumGrade += Number(grade);
        }

        let avg = sumGrade / value.length;
        console.log(`${key}: ${avg.toFixed(2)}`);
    }
}

printSortedGrades([
    'Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);