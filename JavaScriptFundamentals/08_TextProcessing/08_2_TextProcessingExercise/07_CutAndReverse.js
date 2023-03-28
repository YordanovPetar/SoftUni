function cutAndReverse(input) {

    function reverseStr(text) {
        let reversedStr = '';

        for (let chIndex in text) {
            reversedStr += text[text.length - 1 - chIndex];
        }

        return reversedStr;
    }

    let firstHalf = input.substring(0, input.length / 2);
    let secondHalf = input.substring(input.length / 2);

    let firstStr = reverseStr(firstHalf);
    let secondStr = reverseStr(secondHalf);
    
    console.log(firstStr);
    console.log(secondStr);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');