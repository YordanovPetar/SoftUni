function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let sumFirstAndSecondNum = sum(firstNum, secondNum);
    let subtractSumOfFirstTwoMinusThird = subtract(sumFirstAndSecondNum, thirdNum);

    console.log(subtractSumOfFirstTwoMinusThird);
}

addAndSubtract(23, 6, 10);