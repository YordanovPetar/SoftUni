function sumFirstAndLastElements(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    let calculateSumOfFirstAndLastelements = (a, b) => a + b; 

    let sumFirstAndLastElements = calculateSumOfFirstAndLastelements(firstElement, lastElement);

    console.log(sumFirstAndLastElements);
}

sumFirstAndLastElements(['20', '30', '40']);