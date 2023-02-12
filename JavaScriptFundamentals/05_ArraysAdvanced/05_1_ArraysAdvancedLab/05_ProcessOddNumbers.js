function processOddNumbers(inputaArr) {
    let elementsAttOddPositionsReversed = inputaArr
        .filter((num, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse();

    console.log(elementsAttOddPositionsReversed.join(' '));
}

processOddNumbers([10, 15, 20, 25]);