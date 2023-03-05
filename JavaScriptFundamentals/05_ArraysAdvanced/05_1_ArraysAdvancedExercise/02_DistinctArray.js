function distinctArray(input) {
    let arrayWithoutRepeatingElements = [];

    for (let index in input) {
        if (!arrayWithoutRepeatingElements.includes(input[index])) {
            arrayWithoutRepeatingElements.push(input[index]);
        }
    }

    console.log(arrayWithoutRepeatingElements.join(' '));
}

distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);