function sorting(input) {
    let sortedDescending = input.slice().sort((a, b) => b - a);
    let sortedArr = []

    while (sortedDescending.length > 0) {
        let firstElement = sortedDescending.shift();
        let secondElement = sortedDescending.pop();

        sortedArr.push(firstElement, secondElement);
    }

    console.log(sortedArr.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);