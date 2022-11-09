function printSpecialNumbers(input) {
    let num = Number(input[0]);
    let allSpecialNumbers = "";
    
    for (let i = 1111; i <= 9999; i++) {
        let isSpecial = true;

        for (let j = 0; j < 4; j++) {
            let currentNum = i.toString();
            let currentDigit = Number(currentNum.charAt(j));

            if (num % currentDigit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            allSpecialNumbers += i + " ";
        }
    }

    console.log(allSpecialNumbers);
}

printSpecialNumbers(["16"]);