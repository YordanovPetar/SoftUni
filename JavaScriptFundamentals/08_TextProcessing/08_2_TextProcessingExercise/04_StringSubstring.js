function stringSubstring(searchedWord, text) {
    let words = text.split(' ');
    let isSearchedWordFound = false;

    for (let word of words) {
        if (word.toLowerCase() === searchedWord) {
            console.log(searchedWord);
            isSearchedWordFound = true;
            break;
        }
    }

    if (!isSearchedWordFound) {
        console.log(`${searchedWord} not found!`);
    }
}

stringSubstring('javascript',
'JavaaScript is the best programming language');