function ladyBugs(input) {
    let fieldSize = input[0];
    let indexWithLadyBugs = input[1].toString().split(' ');
    let initialField = new Array(fieldSize).fill(0);

    for (let i = 0; i < fieldSize; i++) {
        let currentIndexToFill = indexWithLadyBugs[i];
        if (currentIndexToFill >= 0 && currentIndexToFill < initialField.length) {
            initialField[currentIndexToFill] = 1;
        }
    }

    for (let k = 2; k < input.length; k++) {
        let commands = input[k].toString().split(' ');
        let ladyBugIndex = Number(commands[0]);
        let direction = commands[1];
        let flyLength = Number(commands[2]);

        if (ladyBugIndex >= 0 && ladyBugIndex < initialField.length && initialField[ladyBugIndex] === 1) {
            initialField[ladyBugIndex] = 0;

            if (direction === "right" && (ladyBugIndex + flyLength) >= 0 && (ladyBugIndex + flyLength) < initialField.length) {
                for (let j = ladyBugIndex + flyLength; j < initialField.length; j+=flyLength) {
                    if (initialField[j] === 0) {
                        initialField[j] = 1;
                        break;
                    }
                }
            } else if (direction === "left" && (ladyBugIndex - flyLength) >= 0 && (ladyBugIndex - flyLength) < initialField.length) {
                for (let l = (ladyBugIndex - flyLength); l >= 0; l-=flyLength) {
                    if (initialField[l] === 0) {
                        initialField[l] = 1;
                        break;
                    }
                }
            }
            
        }
    }

    console.log(initialField.join(' '));
}

ladyBugs([ 5, '3', '3 left 2', '1 left -2' ]);
console.log('----------');
ladyBugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
console.log('----------');
ladyBugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1' ]);
console.log('----------');
