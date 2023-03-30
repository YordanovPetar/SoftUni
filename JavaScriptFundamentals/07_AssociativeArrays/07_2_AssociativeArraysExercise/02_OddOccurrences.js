function extraxtOddOccurences(text) {
    let words = text.split(' ').map(x => x.toLowerCase());
    let occurences = new Map();

    for (let word of words) {
        if (!occurences.has(word)) {
            occurences.set(word, 1);
        } else {
            occurences.set(word, occurences.get(word) + 1);
        }
    }

    let oddOccurences = [];
    for (let [key, value] of occurences) {
        if (value % 2 === 1) {
            oddOccurences.push(key);
        }
    }

    console.log(oddOccurences.join(' '));
}

extraxtOddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');