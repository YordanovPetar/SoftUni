function printRightPlacedChar(stringWithMissingCahr, char, stringtoCompare) {
    let res = stringWithMissingCahr.replace('_', char);
    let output = res === stringtoCompare ? "Matched" : "Not Matched";

    console.log(output);
}

printRightPlacedChar('Str_ng', 'i', 'String');