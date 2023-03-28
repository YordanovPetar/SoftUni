function revealWords(wordsInput, text) {
    let wordsArr = wordsInput.split(', ');
    let templateTextArr = text.split(' ');

    for (let word of wordsArr) {
        for (let templateWord of templateTextArr) {
            if (templateWord.startsWith('*') && templateWord.length === word.length) {
                text = text.replace(templateWord, word);
            }
        }
    }

    console.log(text);
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');