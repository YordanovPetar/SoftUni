function stringManipulator(input) {
    let message = input.shift();
    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Translate':
                let stringToReplace = tokens[1];
                let stringToReplaceWith = tokens[2];
                
                while (message.includes(stringToReplace)) {
                    message = message.replace(stringToReplace, stringToReplaceWith);
                }

                console.log(message);
                break;
            case 'Includes':
                let substring = tokens[1];

                if (message.includes(substring)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Start':
                let startingString = tokens[1];

                if (message.startsWith(startingString)) {
                    console.log('True');
                } else {
                    console.log('False');
                }
                break;
            case 'Lowercase':
                message = message.toLowerCase();
                console.log(message);
                break;
            case 'FindIndex':
                let searchedChar = tokens[1];

                console.log(message.lastIndexOf(searchedChar));
                break;
            case 'Remove':
                let startIndex = Number(tokens[1]);
                let count = Number(tokens[2]);
                let leftSide = message.substring(0, startIndex);
                let rightSide = message.substring(startIndex + count);
                message = leftSide + rightSide;

                console.log(message);
                break;
            case 'End':
                return;
        }
    }
}

stringManipulator([
    "//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
]);
console.log('--------------------');
stringManipulator([
    "*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"
]);