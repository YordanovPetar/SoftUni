function printSumPrimeNonPrimeNumbers(input) {
    let index = 0;
    let command = input[index];
    let sumPrimeNumbers = 0;
    let sumNonNumbers = 0;

    while (command !== "stop") {
        let currentNum = Number(command);

        if (currentNum < 0 ) {
            console.log("Number is negative.");
        } else {
            let isPrime = true;

            for (i = 2; i < currentNum; i++) {
                if (currentNum % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (currentNum > 1 && (currentNum === 2 || isPrime)) {
                sumPrimeNumbers += currentNum;
            } else {
                sumNonNumbers += currentNum;
            }
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumNonNumbers}`);
}

printSumPrimeNonPrimeNumbers(["3",
"9",
"0",
"7",
"19",
"4",
"stop"]);