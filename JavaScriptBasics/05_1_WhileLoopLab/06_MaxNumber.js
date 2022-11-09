function printMaxNumber(input) {
    let index = 0;
    let command = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let currentNumber = Number(command);

        if (currentNumber >= maxNumber) {
            maxNumber = currentNumber;
        }

        index++;
        command = input[index];
    }

    console.log(maxNumber);
}

printMaxNumber(["-1",
"-2",
"Stop"]);