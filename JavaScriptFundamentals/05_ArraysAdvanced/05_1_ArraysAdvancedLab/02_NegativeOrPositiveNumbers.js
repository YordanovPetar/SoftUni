function printArrayOfNegativeAndPositiveNumbers(arr) {
    let convertArr = () => {
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            let currentElement = arr[i];
            
            if (currentElement < 0) {
                newArr.unshift(currentElement);
            } else {
                newArr.push(currentElement);
            }
        }

        return newArr;
    };

    let convertedArr = convertArr(arr);

    console.log(convertedArr.join('\n'));
}

printArrayOfNegativeAndPositiveNumbers(['7', '-2', '8', '9']);