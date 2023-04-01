function performOperationsOnMessage(input) {
    function reverseStr(text) {
        return text.split('').reverse().join('');
    }

    let message = input.shift();
    
    for (let command of input) {
        if (command === 'Reveal') {
            break;
        }

        let tokens = command.split(':|:');
        let action = tokens[0];

        if (action === 'ChangeAll') {
            let stringToReplace = tokens[1];
            let stringToReplaceWith = tokens[2];
            
            while (message.includes(stringToReplace)) {
                message = message.replace(stringToReplace, stringToReplaceWith);
            }

            console.log(message);
        } else if (action === "Reverse") {
            let substring = tokens[1];

            if (message.includes(substring)) {
                message = message.replace(substring, '');
                let reverse = reverseStr(substring);
                message += reverse;

                console.log(message);
            } else {
                console.log('error');
            }
        } else if (action === "InsertSpace") {
            let index = Number(tokens[1]);
            let leftSide = message.substring(0, index);
            let rightSide = message.substring(index);
            message = leftSide + " " + rightSide;

            console.log(message);
        }
    }

    console.log(`You have a new text message: ${message}`);
}

performOperationsOnMessage([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
