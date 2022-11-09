function printPyramidOfNumber(input) {
    let num = Number(input[0]);
    let current = 1;
    let isBigger = false;

    for (let rows = 1; rows <= num; rows++) {
        let printCurrentLine = "";

        for (let cols = 1; cols <= rows; cols++) {
            if (current > num) {
                isBigger = true;
                break;
            }

            printCurrentLine += `${current} `;
            current++;
        }

        console.log(printCurrentLine);

        if (isBigger) {
            break;
        }
    }

}


printPyramidOfNumber(["7"]);