function printCakePiecesInfo(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let cakeSize = cakeWidth * cakeLength;
    let index = 2;
    let command = input[index];
    let cakePiecesEaten = 0;

    while (cakeSize > 0 && command !== "STOP") {
        cakePiecesEaten = Number(command);

        cakeSize -= cakePiecesEaten;

        index++;
        command = input[index];
    }

    if (cakeSize >= cakePiecesEaten) {
        console.log(`${cakeSize} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
    }
}

printCakePiecesInfo(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);