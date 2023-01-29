function printCommonElements(firstArr, secondArr) {
    for (let i = 0; i <= firstArr.length - 1; i++) {
        for (let j = 0; j <= secondArr.length - 1; j++) {
            if (firstArr[i] === secondArr[j]) {
                console.log(firstArr[i]);
            }
        }
    }
}

printCommonElements(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);