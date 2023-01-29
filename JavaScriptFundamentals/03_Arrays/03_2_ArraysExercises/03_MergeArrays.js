function mergeArrays(firstArr, secondArr) {
    let newArr = [];

    for (let i = 0; i <= firstArr.length - 1; i++) {
        if (i % 2 === 0) {
            newArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            newArr[i] = firstArr[i].concat(secondArr[i]);
        }
    }

    console.log(newArr.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);