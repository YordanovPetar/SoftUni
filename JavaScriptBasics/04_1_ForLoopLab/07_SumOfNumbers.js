function printSumOfNumbers(input) {
    let sum = 0;
    let number = input[0];

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    console.log(`The sum of the digits is:${sum}`);
}

printSumOfNumbers(["564891"]);