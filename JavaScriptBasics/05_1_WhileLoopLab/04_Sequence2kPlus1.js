function printSequence2kPlus1(input) {
    let n = Number(input[0]);
    let currentdigit = 1;

    while (currentdigit <= n) {
        console.log(currentdigit);

        currentdigit = 2 * currentdigit + 1;
    }
}

printSequence2kPlus1(["31"]);