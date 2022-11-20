function printSumFromTo(start, end) {
    let numbers = "";
    let sum = 0;

    for (let i = start; i <= end; i++) {
        numbers += i + " ";
        sum += i;
    }

    console.log(numbers);
    console.log("Sum: " + sum);
}

printSumFromTo(0, 26);