function addAndSubtract(numbers) {
    let sumNumsInitialArray = 0;
    let sumNumsNewArray = 0;

    for (let i = 0; i <= numbers.length - 1; i++) {
        let currentNum = numbers[i];
        sumNumsInitialArray += currentNum;

        if (currentNum % 2 === 0) {
            numbers[i] = currentNum + i;
        } else {
            numbers[i] = currentNum - i;
        }
        sumNumsNewArray += numbers[i];
    }

    console.log(numbers);
    console.log(sumNumsInitialArray);
    console.log(sumNumsNewArray);
}

addAndSubtract([5, 15, 23, 56, 35]);