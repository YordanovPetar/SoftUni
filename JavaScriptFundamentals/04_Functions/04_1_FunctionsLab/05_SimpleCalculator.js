function simpleCalculator(firstNum, secondNum, operator) {
    let operation = null;

    switch (operator) {
        case "multiply":
            operation = (a, b) => a * b;
            break;
        case "divide":
            operation = (a, b) => a / b;
            break;
        case "add":
            operation = (a, b) => a + b;
            break;
        case "subtract":
            operation = (a, b) => a - b;
            break;
    }

    let result = operation(firstNum, secondNum);
    console.log(result);
}

simpleCalculator(5, 5, 'multiply');
console.log('----------');
simpleCalculator(40, 8, 'divide');
console.log('----------');
simpleCalculator(12, 19, 'add');
console.log('----------');
simpleCalculator(50, 13, 'subtract');
console.log('----------');