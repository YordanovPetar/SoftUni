function printNumbersDivisibleBy9(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let sumNumbersDivisibleBy9 = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 9 === 0) {
            sumNumbersDivisibleBy9 += i;
        }
    }

    console.log("The sum: " + sumNumbersDivisibleBy9);

    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}

printNumbersDivisibleBy9(["100", "200"]);