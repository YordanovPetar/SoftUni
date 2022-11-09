function printSum(input) {
    let firstNum = Number(input[0]);
    let index = 1;
    let sumNextNumbers = 0;

    while (sumNextNumbers < firstNum) {
        sumNextNumbers += Number(input[index]);
        index++;
    }

    console.log(sumNextNumbers);
}

printSum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])