function sumFirstAndLastElements(array) {
    let firstNumber = Number(array[0]);
    let lastNumber = Number(array[array.length - 1]);

    console.log(firstNumber + lastNumber);
}

sumFirstAndLastElements(['20', '30', '40']);