function equalSums(inputArr) {
    let indexOfEqualSums = 0;

    for (let i = 0; i < inputArr.length - 1; i++) {
        let sumLeftElements = 0;
        let sumRightElements = 0;

        for (let j = 0; j < i + 1; j++) {
            sumLeftElements += inputArr[j];
        }
        for (let k = i + 2; k < inputArr.length; k++) {
            sumRightElements += inputArr[k];
        }

        if (sumLeftElements === sumRightElements) {
            indexOfEqualSums= i + 1;
            break;
        }
    }

    if (indexOfEqualSums > 0 || inputArr.length === 1) {
        console.log(indexOfEqualSums);
    } else {
        console.log('no');
    }
}

equalSums([1]);
console.log('----------');
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
console.log('----------');
equalSums([1, 2, 3]);
console.log('----------');
equalSums([1, 2]);
console.log('----------');
equalSums([1, 2, 3, 3]);