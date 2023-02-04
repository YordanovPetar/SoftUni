function oddAndEvenSum(number) {
    let returnLastDigit = (n) => n % 10;
    let removeLastDigitFromNumber = (n) => Math.trunc(n / 10);

    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;

    while (number > 0) {
        let currentDigit = returnLastDigit(number);
        number = removeLastDigitFromNumber(number);
        
        (currentDigit % 2 === 0) ? (sumOfEvenNumbers += currentDigit) : (sumOfOddNumbers += currentDigit);
    }

    console.log(`Odd sum = ${sumOfOddNumbers}, Even sum = ${sumOfEvenNumbers}`);
}

oddAndEvenSum(1000435);
