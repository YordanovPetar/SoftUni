function pascalCaseSplitter(text) {
    let splittedWords = [];
    let startIndex = 0;

    for (let i = 1; i < text.length; i++) {
        let ch = text[i];
        
        if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
            splittedWords.push(text.substring(startIndex, i));
            startIndex = i;
        } 
    }
    
    splittedWords.push(text.substring(startIndex));
    console.log(splittedWords.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');