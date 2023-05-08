function printLargestNumber(num1, num2, num3) {
    let largestNum = num3;
    
    if (num1 > num2 && num1 > num3) {
        largestNum = num1;
    } else if (num2 > num1 && num2 > num3) {
        largestNum = num2;
    } else {
        largestNum = num3;
    }

    console.log(`The largest number is ${largestNum}.`);
}

printLargestNumber(17, -3, 16);
