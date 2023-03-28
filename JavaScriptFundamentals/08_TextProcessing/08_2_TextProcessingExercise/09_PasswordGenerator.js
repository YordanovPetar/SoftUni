function passwordGenerator(input) {
    let concatenatedFirstTwoStr = input[0].concat(input[1]).toLowerCase();
    let charsToUse = input[2].toUpperCase();
    let index = 0;

    for (let i = 0; i < concatenatedFirstTwoStr.length; i++) {
        let ch = concatenatedFirstTwoStr[i];

        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            concatenatedFirstTwoStr = concatenatedFirstTwoStr.replace(ch, charsToUse[index]);
            index++;
        }

        if (index === charsToUse.length) {
            index = 0;
        }
    }

    let password = concatenatedFirstTwoStr.split('').reverse().join('');

    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);