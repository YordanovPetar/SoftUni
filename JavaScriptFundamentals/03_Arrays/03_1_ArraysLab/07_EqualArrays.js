function areArraysEqual(firstArr, secondArr) {
    let sum = 0;
    let areEqual = true;
    let indexDiffer;

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] === secondArr[i]) {
            sum += Number(firstArr[i]);
        } else {
            areEqual = false;
            indexDiffer = i;
            break;
        }
    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexDiffer} index`);
    }
}

areArraysEqual(
    ['10','20','30'],
    ['10','5','30']);