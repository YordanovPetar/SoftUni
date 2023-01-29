function maxNumber(numbers) {
    let topIntegers = [];
    let index = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
        let currentNum = numbers[i];
        let maxNum;
        let isBiggerNum = true;

        for (let j = i + 1; j < numbers.length; j++) {
            if (currentNum > numbers[j]) {
                maxNum = currentNum;
            } else {
                isBiggerNum = false;
                break;
            }
        }

        if (isBiggerNum) {
            topIntegers[index] = maxNum;
            index++;
        }
    }
    topIntegers[index] = (numbers[numbers.length - 1]);

    console.log(topIntegers.join(' '));
}

maxNumber([1, 4, 3, 2]);