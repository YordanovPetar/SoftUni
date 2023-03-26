function countStringOccurrences(text, searchedWord) {
    let words = text.split(' ');
    let occurences = 0;

    for (let word of words) {
        if (word === searchedWord) {
            occurences++;
        }
    }

    console.log(occurences);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');