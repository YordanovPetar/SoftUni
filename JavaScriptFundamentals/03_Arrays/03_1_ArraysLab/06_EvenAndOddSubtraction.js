function evenAndOddSubtraction(numbers) {
    let sumEvenNums = 0;
    let sumOddNums = 0;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = Number(numbers[i]);
        if (currentNum % 2 === 0) {
            sumEvenNums += currentNum;
        } else {
            sumOddNums += currentNum;
        }
    }

    console.log(sumEvenNums - sumOddNums);
}

evenAndOddSubtraction([1,2,3,4,5,6]);