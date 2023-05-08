function calculateCircleArea(input) {
    let result;
    let inputType = typeof(input);

    if (inputType === 'number') {
        result = Math.PI * Math.pow(input, 2);
        console.log(result.toFixed(2));
    } else {
        result = `We can not calculate the circle area, because we receive a ${inputType}.`;
        console.log(result);
    }
}

calculateCircleArea(5);
console.log('------------');
calculateCircleArea('name');