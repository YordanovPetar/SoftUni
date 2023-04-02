function theImitationGame(data) {
    let text = data.shift();
    
    for (let i = 0; i < data.length; i++) {
        let tokens = data[i].split('|');
        let command = tokens[0];

        if (command === "Decode") {
            break;
        } else if (command === "Move") {
            let n = Number(tokens[1]);
            for(let j = 0; j < n; j++) {
                let firstLetter = text.substring(0, 1);
                let anotherText = text.substring(1);
                text = anotherText + firstLetter;
            }
        } else if (command === "Insert") {
            let index = Number(tokens[1]);
            let value = tokens[2];
            text = text.substring(0, index) + value + text.substring(index);
        } else if (command === "ChangeAll") {
            let old = tokens[1];
            let newLetters = tokens[2];
            while(text.includes(old)) {
                text = text.replace(old, newLetters);
            }
        }
    }

    console.log('The decrypted message is: ' + text);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);