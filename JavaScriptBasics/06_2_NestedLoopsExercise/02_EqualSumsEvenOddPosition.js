function printSumsEvenOddPositions(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let positions = "";

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let numAsString = currentNum.toString();
        let sumEvenDigits = 0;
        let sumOddDigits = 0;

        for (let currentPosition = 0; currentPosition < numAsString.length; currentPosition++) {
            let currentDigit = Number(numAsString[currentPosition]);

            if (currentPosition % 2 === 0) {
                sumEvenDigits += currentDigit;
            } else {
                sumOddDigits += currentDigit;
            }
        }

        if (sumEvenDigits === sumOddDigits) {
            positions += currentNum + " ";
        }
    }

    console.log(positions);
}

printSumsEvenOddPositions(["123456", "124000"]);