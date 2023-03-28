function replaceRepeatingChars(text) {
    for (let i = 0; i < text.length; i++) {
        let ch = text[i];

        let sequence = '';
        for (let j = i; j < text.length; j++) {
            let repeatedCh = text[j];

            if (!(ch === repeatedCh)) {
                break;
            }

            sequence += repeatedCh;
        }

        text = text.replace(sequence, ch);
    }

    console.log(text);
}

// function solve(input) {

//     let str = ''
//     for (let value of input) {
//         if (value !== str[str.length - 1]) {
//             str += value
//         }

//     }
//     console.log(str)
// }

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');