function printMatrix(num) {
    let repeatNum = (n) => {
        let repeatedNum = [];

        for (let i = 0; i < n; i++) {
            repeatedNum.push(n);
        }

        return repeatedNum.join(' ');
    };

    let printRepeatedRow = (row, count) => {
        for (let j = 0; j < count; j++) {
            console.log(row);
        }
    };

    let lineToPrint = repeatNum(num);
    let matrix = printRepeatedRow(lineToPrint, num);
}

printMatrix(7);