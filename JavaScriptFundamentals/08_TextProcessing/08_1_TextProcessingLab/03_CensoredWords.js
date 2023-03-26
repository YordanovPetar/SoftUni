function censoredWords(text, wordToCensore) {
    function repelacedWithStars(input) {
        let repeatedString = '*'.repeat(input.length);
    
        return repeatedString;
    }
    
    let censoredText = text.replace(wordToCensore, repelacedWithStars(wordToCensore));

    while (censoredText.includes(wordToCensore)) {
        censoredText = censoredText.replace(wordToCensore, repelacedWithStars(wordToCensore));
    }

    console.log(censoredText);
}


censoredWords('Find the hidden word hidden', 'hidden');