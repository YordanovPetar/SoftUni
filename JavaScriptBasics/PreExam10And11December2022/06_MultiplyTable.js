function printMultiplyTable(input) {
    let numberAsString = input[0];
    let firstDigit = numberAsString[2];
    let secondDigit = numberAsString[1];
    let thirdDigit = numberAsString[0];

    for (let i = 1; i <= firstDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= thirdDigit; k++) {
                console.log(`${i} * ${j} * ${k} = ${i * j * k};`);
            }
        }
    }
}

printMultiplyTable(["324"]);