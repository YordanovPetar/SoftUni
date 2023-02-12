function printSmallestTwoNumbers(inputaArr) {
    let sortedInAscending = inputaArr.sort((a, b) => {
        return a - b;
    });

    let smallesTwoNumbers= sortedInAscending.slice(0, 2);

    console.log(smallesTwoNumbers.join(' '));
}

printSmallestTwoNumbers([30, 15, 50, 5]);