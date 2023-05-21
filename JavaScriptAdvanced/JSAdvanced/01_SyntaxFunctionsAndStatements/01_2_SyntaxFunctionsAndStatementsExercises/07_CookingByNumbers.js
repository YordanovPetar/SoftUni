function cookingByNumbers(...input) {
    let [num, ...operations] = input;

    const operationsDictionary = {
        "chop": x => x / 2,
        "dice": x => Math.sqrt(x),
        "spice": x => x + 1,
        "bake": x => x * 3,
        "fillet": x => x - x * 0.2
    }

    for (let operation of operations) {
        num = operationsDictionary[operation](num);
        console.log(num);
    }
}

// 16 8 4 2 1
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');