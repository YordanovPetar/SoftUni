function printCountSolutions(input) {
    let num = Number(input[0]);
    let countSolutions = 0;

    for (let x1 = 0; x1 <= num; x1++) {
        for (x2 = 0; x2 <= num; x2++) {
            for (x3 = 0; x3 <= num; x3++) {
                if (x1 + x2 + x3 === num) {
                    countSolutions++;
                }
            }
        }
    }

    console.log(countSolutions);
}

printCountSolutions(["25"]);