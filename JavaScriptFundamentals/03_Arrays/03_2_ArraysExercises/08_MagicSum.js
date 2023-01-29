function magicSum(numbers, n) {
    for (let i = 0; i < numbers.length; i++) {
        let firstNum = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            let nextNum = numbers[j];

            if ((firstNum + nextNum) === n) {
                console.log(`${firstNum} ${nextNum}`);
            }
        }
    }
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('----------');
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log('----------');
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('----------');