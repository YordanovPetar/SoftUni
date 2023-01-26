function sumEvenNumbers(inputArr) {
    let sumEvenNums = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let currentNum = Number(inputArr[i]);
        if (currentNum % 2 === 0) {
            sumEvenNums += currentNum;
        }
    }

    console.log(sumEvenNums);
}

sumEvenNumbers(['1','2','3','4','5','6']);