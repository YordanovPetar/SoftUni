function printSmallestNumber(firstNum, secondNum, thirdNum) {
    let findSmallestNumber = (numOne, numTwo, numThree) => {
        let smallestNum = numOne;
    
        if (numTwo < numOne && numTwo < numThree) {
            smallestNum = numTwo;
        } else if (numThree < numOne) {
            smallestNum = numThree;
        }
    
        return smallestNum;
    };

    let result = findSmallestNumber(firstNum, secondNum, thirdNum);

    console.log(result);
}

printSmallestNumber(2, 5, 3);
console.log('----------');
printSmallestNumber(600, 342, 123);
console.log('----------');
printSmallestNumber(25, 21, 4);
console.log('----------');
printSmallestNumber(2, 2, 2);