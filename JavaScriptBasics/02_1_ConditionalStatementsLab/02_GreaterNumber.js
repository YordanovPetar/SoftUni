function printLargerNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    firstNumber >= secondNumber ? console.log(firstNumber) : console.log(secondNumber);
}

printLargerNumber(["3", "5"]);