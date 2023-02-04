function printPalindromeIntegers(numbers) {
    let getReversedValue = (input) => {
        let inputArr = input.toString().split('');
        let reversed = [];

        for(let i = 0; i < inputArr.length; i++) {
            reversed[i] = inputArr[inputArr.length - i - 1];
        }

        return reversed.join('');
    };

    let checkIfNumberIsPalindrom = (value) => {
        let reversedValue = getReversedValue(value);

        return (value === Number(reversedValue)) ? true : false;
    };
    
    for (let num of numbers) {
        let isNumPalindtrome = checkIfNumberIsPalindrom(num);
        console.log(isNumPalindtrome);
    }
}

printPalindromeIntegers([123, 323, 421, 121]);