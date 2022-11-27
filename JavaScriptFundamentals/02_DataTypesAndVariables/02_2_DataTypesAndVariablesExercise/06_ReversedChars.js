function printReversedChars(firstChar, secondChar, thirdChar) {
    let reversed = [thirdChar, secondChar, firstChar];
    let joined = reversed.join(' ');

    console.log(joined);
}

printReversedChars('A', 'B', 'C');