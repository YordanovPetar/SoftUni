function calculate(firstNum, operator, secondNum) {
    let result = 0;

    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
    }

    console.log(result.toFixed(2));
}

calculate(5, '+', 10);