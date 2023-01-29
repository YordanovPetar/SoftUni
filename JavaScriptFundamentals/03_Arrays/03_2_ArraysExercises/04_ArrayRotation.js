function arrayRotation(numbers, n) {
    for (let i = 0; i < n; i++) {
        let initialFirstElement = numbers[0];
        
        for (let i = 0; i < numbers.length - 1; i++) {
            numbers[i] = numbers[i + 1];
        }
        numbers[numbers.length - 1] = initialFirstElement;
    }

    console.log(numbers.join(' '));
}

arrayRotation(
    [51, 47, 32, 61, 21], 2
);