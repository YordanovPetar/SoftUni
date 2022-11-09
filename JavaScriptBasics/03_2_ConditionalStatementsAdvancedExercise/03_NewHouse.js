function printIsFlowersBudgetEnough(input) {
  let flowersType = input[0];
  let flowersQuantity = Number(input[1]);
  let flowersBudget = Number(input[2]);

  let producPrice = 0;
  let discount = 0;
  let additionalCosts = 0;

  if (flowersType === "Roses") {
    producPrice = 5;

    if (flowersQuantity > 80) {
      discount = 0.1;
    }
  } else if (flowersType === "Dahlias") {
    producPrice = 3.8;

    if (flowersQuantity > 90) {
      discount = 0.15;
    }
  } else if (flowersType === "Tulips") {
    producPrice = 2.8;

    if (flowersQuantity > 80) {
      discount = 0.15;
    }
  } else if (flowersType === "Narcissus") {
    producPrice = 3;

    if (flowersQuantity < 120) {
      additionalCosts = 0.15;
    }
  } else if (flowersType === "Gladiolus") {
    producPrice = 2.5;

    if (flowersQuantity < 80) {
      additionalCosts = 0.2;
    }
  }

  let price = flowersQuantity * producPrice;
  let finalPrice = price - price * discount + price * additionalCosts;

  flowersBudget >= finalPrice ?
    console.log(`Hey, you have a great garden with ${flowersQuantity} ${flowersType} and ${(flowersBudget - finalPrice).toFixed(2)} leva left.`) :
    console.log(`Not enough money, you need ${(finalPrice - flowersBudget).toFixed(2)} leva more.`);
}

printIsFlowersBudgetEnough(["Dahlias", "112", "460"]);
