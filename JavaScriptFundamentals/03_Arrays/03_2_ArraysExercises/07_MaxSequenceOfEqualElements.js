function maxSequenceOfEqualElements(inputArr) {
    let longestSequenceOfElements = [];
    let longestSequenceCount = 0;

    for (let i = 0; i < inputArr.length; i++) {
        let currentLongestSequenceOfElements = [];
        let currentLongestSequenceCount = 0;

        for (let j = i; j < inputArr.length; j++) {
            if (inputArr[i] === inputArr[j]) {
                currentLongestSequenceOfElements.push(inputArr[j]);
                currentLongestSequenceCount++;
            } else {
                break;
            }
        }

        if (currentLongestSequenceCount > longestSequenceCount) {
            longestSequenceCount = currentLongestSequenceCount;
            longestSequenceOfElements = currentLongestSequenceOfElements;
        }
    }

    console.log(longestSequenceOfElements.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
console.log('----------');
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
console.log('----------');
maxSequenceOfEqualElements([4, 4, 4, 4]);
console.log('----------');
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);