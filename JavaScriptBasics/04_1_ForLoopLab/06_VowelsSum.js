function printSumOfVowels(input) {
    let text = input[0];
    let sumVowels = 0;

    for (let i = 0; i < text.length; i++) {
        let currentLetter = text[i];
        
        switch (currentLetter) {
            case "a": sumVowels += 1; break;
            case "e": sumVowels += 2; break;
            case "i": sumVowels += 3; break;
            case "o": sumVowels += 4; break;
            case "u": sumVowels += 5; break;
        }
    }

    console.log(sumVowels);
}

printSumOfVowels(["bamboo"]);