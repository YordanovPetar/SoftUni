function bombNumbers(firstArr, secondArr) {
    let numToSearchFor = Number(secondArr.shift());
    let power = Number(secondArr.shift());

    while (firstArr.includes(numToSearchFor)) {
        let indexToRemoveFrom = firstArr.indexOf(numToSearchFor);;
        let start = Math.max(0, indexToRemoveFrom - power);
        let count = power * 2 + 1;

        firstArr.splice(start, count);
    }

    console.log(firstArr.reduce((sum, x) => sum + x, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);