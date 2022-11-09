function printMinNumber(input) {
    let index = 0;
    let command = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let currentNumber = Number(command);

        if (currentNumber <= minNumber) {
            minNumber = currentNumber;
        }

        index++;
        command = input[index];
    }

    console.log(minNumber);
}

printMinNumber(["45",
"-20",
"7",
"99",
"Stop"]);