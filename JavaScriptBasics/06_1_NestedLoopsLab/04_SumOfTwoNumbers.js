function printFirstCombinationOfNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let countCombinations = 0;
    let isCombinationEqualtoMagicNum = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            countCombinations++;
            let result = i + j;

            if (result === magicNum) {
                console.log(`Combination N:${countCombinations} (${i} + ${j} = ${result})`);
                isCombinationEqualtoMagicNum = true;
                break;
            }
        }

        if (isCombinationEqualtoMagicNum === true) {
            break;
        }
    }

    if (isCombinationEqualtoMagicNum === false) {
        console.log(`${countCombinations} combinations - neither equals ${magicNum}`);
    }
}

printFirstCombinationOfNumbers(["1",
"10",
"5"]);