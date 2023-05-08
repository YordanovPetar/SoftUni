function printNumsFromNToM(startNum, endNum) {
    let start = Number(startNum);
    let end = Number(endNum);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    console.log(sum);
}

printNumsFromNToM('-8', '20');
