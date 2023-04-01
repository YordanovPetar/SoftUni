// Solution 1
function printMirrorWords(input) {
    let pattern = /[@#](?<firstWord>[a-zA-Z]{3,})[@#][@#](?<secondWord>[a-zA-Z]{3,})[@#]/g;
    let mirrorWords = {};
    let validWord = null;
    let countPairs = 0;

    while ((validWord = pattern.exec(input)) !== null) {
        countPairs++;
        let reversedWord = validWord.groups.firstWord.split('').reverse().join('');

        if (reversedWord === validWord.groups.secondWord) {
            mirrorWords[validWord.groups.firstWord] = validWord.groups.secondWord;
        }
    }

    let mirrorWordsArr = [];

    for (let [firstWord, secondWord] of Object.entries(mirrorWords)) {
        mirrorWordsArr.push(`${firstWord} <=> ${secondWord}`);
    }

    if (countPairs > 0) {
        console.log(`${countPairs} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (mirrorWordsArr.length > 0) {
        console.log('The mirror words are:');
        console.log(mirrorWordsArr.join(', '));
    } else {
        console.log('No mirror words!');
    }
}

// Solution 2
function mirrorWords(arr) {
    let regex = /([@#])(?<word1>[a-zA-Z]{3,})\1{2}(?<word2>[a-zA-Z]{3,})\1/g;
    let count = 0;
    let results = [];
    for (const text of arr) {
        let matches = text.matchAll(regex);
        for (const match of matches) {
            count++;
            let leftWord = match.groups['word1'];
            let rightWord = match.groups['word2'];
            let reversedRightWord = reverseStr(rightWord);
            if (leftWord === reversedRightWord) {
                results.push(`${leftWord} <=> ${rightWord}`);
            }
        }
    }

    if (count > 0) {
        console.log(`${count} word pairs found!`);
    } else {
        console.log('No word pairs found!');
    }

    if (results.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:\n${results.join(', ')}`);
    }

    function reverseStr(text) {
        let reversed = '';
        for (let i = text.length - 1; i >= 0; i--) {
            reversed += text[i];
        }
        return reversed;
    }
}

printMirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);