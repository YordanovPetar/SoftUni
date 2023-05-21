function sameNumbers(num) {
    let arr = num.toString().split("");
    let sum = Number(arr[0]);
    let isSame = true;

    for (let i = 1; i < arr.length; i++) {
        const currentNum = arr[i];
        sum += Number(currentNum);

        if (arr[0] !== currentNum) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

// map - transformation function
// filter - filters
// reduce - combines the two above

// true 14
sameNumbers(2222222);

// false 10
sameNumbers(1234);