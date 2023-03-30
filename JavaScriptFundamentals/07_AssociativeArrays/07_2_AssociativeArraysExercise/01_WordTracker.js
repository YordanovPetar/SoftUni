function findOccurences(text) {
    let wordsToSearch = text.shift().split(' ');
    let occurrences = {};

    for (let searchedWord of wordsToSearch) {
        occurrences[searchedWord] = 0;
        for (let word of text ) {
            let wordCount = 0;

            if (word === searchedWord) {
                wordCount++;

                if (occurrences.hasOwnProperty(word)) {
                    let existingCount = Number(occurrences[word]);
                    occurrences[word] = existingCount + wordCount;
                } else {
                    occurrences[word] = wordCount;
                }
            }
        }
    }

    let sortedOccurences = Object.entries(occurrences).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let [key, value] of sortedOccurences) {
        console.log(`${key} - ${value}`);
    }
}

findOccurences([
    'is the john', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);