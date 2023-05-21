function printFruitWeightAndPrice(fruit, weightInGrams, money) {
    const weightInKG = weightInGrams / 1000;
    const costPerKG = weightInKG * money;

    console.log(`I need $${costPerKG.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`);
}

// I need $4.50 to buy 2.50 kilograms orange.
printFruitWeightAndPrice('orange', 2500, 1.80);

// I need $3.67 to buy 1.56 kilograms apple.
printFruitWeightAndPrice('apple', 1563, 2.35);