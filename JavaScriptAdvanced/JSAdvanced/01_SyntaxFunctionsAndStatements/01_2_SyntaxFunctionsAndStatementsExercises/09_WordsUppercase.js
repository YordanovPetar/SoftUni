function wordsUppercase(inputStr) {
    let pattern = /\w+/g;
    let words = inputStr.match(pattern).join(', ').toUpperCase();

    console.log(words);
}

wordsUppercase('Hi, how are you?');
console.log('----------------');
wordsUppercase('hello');