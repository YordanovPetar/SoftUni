function lettersChangeNumbers(input) {
    let strings = input.split(' ').filter(x => x.length > 1);
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let sumNumbers = 0;

    for (let string of strings) {
        let letterBeforeNum = string[0];
        let letterBeforeNumAlphabetPosition = alphabet.indexOf(letterBeforeNum.toUpperCase()) + 1;
        let letterAfterNum = string[string.length - 1];
        let letterAfterNumAlphabetPosition = alphabet.indexOf(letterAfterNum.toUpperCase()) + 1;
        let number = Number(string.substring(1, string.length - 1));

        if (letterBeforeNum.charCodeAt(0) >= 65 && letterBeforeNum.charCodeAt(0) <= 90) {
            number = number / letterBeforeNumAlphabetPosition;
        } else {
            number = number * letterBeforeNumAlphabetPosition;
        }

        if (letterAfterNum.charCodeAt(0) >= 65 && letterAfterNum.charCodeAt(0) <= 90) {
            number = number - letterAfterNumAlphabetPosition;
        } else {
            number = number + letterAfterNumAlphabetPosition
        }

        sumNumbers += number;
    }

    console.log(sumNumbers.toFixed(2));
}

lettersChangeNumbers('P34562Z q2576f   H456z');