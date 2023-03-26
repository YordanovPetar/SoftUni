function substring(inputStr, startIndex, countElements) {
    // let endIndex = startIndex + countElements;
    // let result = inputStr.substring(startIndex, endIndex);

    let result = '';
    let endIndex = Math.min(inputStr.length, startIndex + countElements);

    for (let i = startIndex; i < endIndex; i++) {
        result += inputStr[i];
    }
    
    console.log(result);
}

substring('SkipWord', 4, 7);