function passwordValidator(enteredPassword) {
    let getNumberFromChar = (c) => c.charCodeAt(0);

    let checkIsPasswordBetween6And10Characters = (password) => {
        return (password.length >= 6 && password.length <= 10) ? true : false;
    };

    let checkisPasswordConsistingOnlyOfLettersAndDigits = (password) => {
        let isLetterOrDigit = true;

        for (let char of password) {
            let currentChar = getNumberFromChar(char);

            if (!((currentChar >= 48 && currentChar <= 57) ||
                (currentChar >= 65 && currentChar <= 90) ||
                (currentChar >= 97 && currentChar <= 122))) {
                    isLetterOrDigit = false;
                    break;
                }
        }

        return isLetterOrDigit;
    };

    let checkIsPasswordContainingAtLeast2Digits = (password) => {
        let countDigits = 0;

        for (let char of password) {
            let currentChar = getNumberFromChar(char);

            if (currentChar >= 48 && currentChar <= 57) {
                countDigits++;
            }
        }

        return (countDigits >= 2) ? true : false;
    };

    let isPasswordBetween6And10Characters = checkIsPasswordBetween6And10Characters(enteredPassword);
    let isPasswordConsistingOnlyOfLettersAndDigits = checkisPasswordConsistingOnlyOfLettersAndDigits(enteredPassword);
    let isPasswordContainingAtLeast2Digits = checkIsPasswordContainingAtLeast2Digits(enteredPassword);

    if (isPasswordBetween6And10Characters === true &&
        isPasswordConsistingOnlyOfLettersAndDigits === true &&
        isPasswordContainingAtLeast2Digits === true) {
        console.log('Password is valid');
    } else {
        if (isPasswordBetween6And10Characters === false) {
            console.log('Password must be between 6 and 10 characters');
        }

        if (isPasswordConsistingOnlyOfLettersAndDigits === false) {
            console.log('Password must consist only of letters and digits');
        }

        if (isPasswordContainingAtLeast2Digits === false) {
            console.log('Password must have at least 2 digits');
        }
    }
}

passwordValidator('Pa$s$s');
console.log('---------');
passwordValidator('logIn');
console.log('---------');
passwordValidator('MyPass123');