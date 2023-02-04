function printCharactersInRange(startChar, endChar) {
    let getNumberValue = (c) => c.charCodeAt(0);
    let getCharValue = (n) => String.fromCharCode(n);

    let getCharsInRange = (start, end) => {
        let characters = [];

        for (let i = (start + 1); i < end; i++) {
            let symbol = getCharValue(i);
            characters.push(symbol);
        }

        return characters;
    };

    let start = getNumberValue(startChar);
    let end = getNumberValue(endChar);
    let min = Math.min(start, end);
    let max = Math.max(start, end);
    let charsInRange = getCharsInRange(min, max);

    console.log(charsInRange.join(' '));
}

printCharactersInRange('C', '#');