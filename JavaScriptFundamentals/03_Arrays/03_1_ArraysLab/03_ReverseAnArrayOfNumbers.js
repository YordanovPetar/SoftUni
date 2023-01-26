function reverse(n, inputArr) {
    let currentArr = [];

    for (let i = 0; i < n; i++) {
        currentArr.push(inputArr[i]);
    }

    currentArr.reverse();

    console.log(currentArr.join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);
