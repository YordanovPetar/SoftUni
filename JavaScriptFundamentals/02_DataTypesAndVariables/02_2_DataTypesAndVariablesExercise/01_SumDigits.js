function sumNumberDigits(number) {
    let sum = 0;
    
    while (number > 0) {
        let currentDigit = number % 10;
        number = Math.trunc(number / 10);

        sum += currentDigit;
    }

    console.log(sum);
}

sumNumberDigits(245678);