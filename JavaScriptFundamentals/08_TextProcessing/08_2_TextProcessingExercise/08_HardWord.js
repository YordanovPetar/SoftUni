function hardWords(input) {
    let [missingWordsLetter, wordsToFillFrom] = input;
    let charsToReplace = '';

    for (let i = 0; i < missingWordsLetter.length; i++) {
        
        let currentChar = missingWordsLetter[i];

        if (currentChar.startsWith('_')) {
            charsToReplace += currentChar;
        } else {
            for (let word of wordsToFillFrom) {
                if (word.length === charsToReplace.length) {
                    missingWordsLetter = missingWordsLetter.replace(charsToReplace, word);
                }
            }

            charsToReplace = '';
        }
    }

    console.log(missingWordsLetter);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);