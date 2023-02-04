function printIsNumberPerfect(number) {
    let calculateSumOfProperDivisors = (number) => {
        let sumPositiveProperDivisors = 0;

        for (let i = 1; i <= number; i++) {
            if (i !== number && (number / i) % 1 === 0) {
                sumPositiveProperDivisors += i;
            }
        }

        return sumPositiveProperDivisors;
    }

    let sumProperDivisors = calculateSumOfProperDivisors(number);

    function isNumberPerfect(number, sumProperDivisors) {
        return number === sumProperDivisors;
    }

    if (isNumberPerfect(number, sumProperDivisors)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

printIsNumberPerfect(6);
console.log('----------');
printIsNumberPerfect(28);
console.log('----------');
printIsNumberPerfect(1236498);
