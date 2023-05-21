function printGreatestCommonDivisor(firstNum, secondNum) {
    while(secondNum) {
        const temp = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = temp;
    }

    console.log(firstNum);
}

// 5
printGreatestCommonDivisor(15, 5);

// 2
printGreatestCommonDivisor(2154, 458);