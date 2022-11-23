function printIsNumberSpecial(num) {
    for (let i = 1; i <= num; i++) {
        let sumDigits = 0;
        let currentNum = i.toString();

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            
            sumDigits += currentDigit;
        }

        let isSpecial = "";

        if (sumDigits === 5 ||
            sumDigits === 7 ||
            sumDigits === 11) {
                isSpecial = "True";
            } else {
                isSpecial = "False";
            }

        console.log(`${currentNum} -> ${isSpecial}`);
    }
}

printIsNumberSpecial(15);